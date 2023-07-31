import React from "react";
import { Container, Title, StyledNavLink } from "./styled-components";
import OrdersIcon from "../../icons/OrdersIcon";
import PickUpsIcon from "../../icons/PickUpsIcon";
import ShipmentsIcon from "../../icons/ShipmentsIcon";
import Spacer from "../Spacer/Index";
import EstafetaIcon from "../../icons/EstafetaIcon";
interface LinkProps {
  icon: React.ReactNode;
  title: string;
  url?: string;
  onClick?: () => void;
}

const SidebarLink = ({ icon, title, url, onClick }: LinkProps) => {
  return (
    <StyledNavLink
      className={({ isActive }) => (isActive ? "active" : "")}
      to={url ?? "/"}
      onClick={() => onClick?.()}
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
  const handleGoToEstafeta = () => {
    window.open(
      "https://estafetap10-dev.estafeta.com/EstafetaPlugIn_UI/PruebaConexion"
    );
  };

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
      <Spacer height={50} />
      <SidebarLink
        icon={<EstafetaIcon />}
        onClick={handleGoToEstafeta}
        title={"Estafeta Plugin"}
      />
    </Container>
  );
};

export default Sidebar;
