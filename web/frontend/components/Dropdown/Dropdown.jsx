import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Menu, Trigger, Label } from "./styled-components";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import ArrowUpIcon from "../../icons/ArrowUpIcon";

const TriggerComponent = ({ label, onClick, width = 168, menuPosition = "bottom" }) => {
  return (
    <Trigger onClick={onClick} width={width}>
      <Label>{label}</Label>
      {
        menuPosition === "bottom" ? <ArrowDownIcon /> : <ArrowUpIcon />
      }
    </Trigger>
  );
}


const Dropdown = ({ label, menu, width = 168, menuPosition = "bottom", value = '' }) => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  const handleClickOutside = (e) => {
    if (node?.current?.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const trigger = <TriggerComponent width={width} label={value || label} menuPosition={menuPosition} />

  const menuProps = useMemo(() => {
    if (menuPosition === "top") {
      return {
        paddingTop: "0",
        top: `-${menu.length * 34}px`,
        paddingBottom: `15px`,
      }
    }

    return {};
  }, [menuPosition]);

  return (
    <Container ref={node}>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <Menu className="menu" position={menuPosition} style={menuProps}>
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </Menu>
      ) : null}
    </Container>
  );
};

export default Dropdown;
