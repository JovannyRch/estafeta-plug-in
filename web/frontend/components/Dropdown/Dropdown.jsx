import React, { useEffect, useRef, useState } from "react";
import { Container, Menu, Trigger, Label } from "./styled-components";
import ArrowDownIcon from "../../icons/ArrowDownIcon";

const TriggerComponent = ({ label, onClick }) => {
  return (
    <Trigger onClick={onClick}>
      <Label>{label}</Label>
      <ArrowDownIcon />
    </Trigger>
  );
}


const Dropdown = ({ label, menu }) => {
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

  const trigger = <TriggerComponent label={label} />


  return (
    <Container ref={node}>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <Menu className="menu">
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
