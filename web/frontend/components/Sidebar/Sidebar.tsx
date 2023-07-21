import React from "react";
import { Container, Title, StyledNavLink } from "./styled-components";
import OrdersIcon from "../../icons/OrdersIcon";
import PickUpsIcon from "../../icons/PickUpsIcon";
import ShipmentsIcon from "../../icons/ShipmentsIcon";
interface LinkProps {
  icon: React.ReactNode;
  title: string;
  url?: string;
}

const SidebarLink = ({ icon, title, url }: LinkProps) => {
  return (
    <StyledNavLink
      className={({ isActive }) => (isActive ? "active" : "")}
      to={url ?? "/"}
    >
      <div className="active-line" />
      {icon}
      {title}
    </StyledNavLink>
  );
};

const links = [
  {
    icon: <OrdersIcon />,
    title: "Órdenes",
    url: "/orders",
  },
  {
    icon: <ShipmentsIcon />,
    title: "Envíos",
    url: "/shipments",
  },
  {
    icon: <PickUpsIcon />,
    title: "Recolecciones",
    url: "/pickups",
  },
];

const Sidebar = () => {
  return (
    <Container>
      <Title>¿Qué haremos hoy?</Title>
      {links.map((link) => {
        return (
          <SidebarLink
            key={link.url}
            icon={link.icon}
            url={link.url}
            title={link.title}
          />
        );
      })}
    </Container>
  );
};

export default Sidebar;
