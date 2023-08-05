import React from "react";
import {
  Container,
  Title,
  StyledNavLink,
  SidebarButton,
} from "./styled-components";
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
  collapsed?: boolean;
}

const SidebarLink = ({ icon, title, url, onClick, collapsed }: LinkProps) => {
  return (
    <StyledNavLink
      className={({ isActive }) => (isActive ? "active" : "")}
      to={url ?? "/"}
      onClick={() => onClick?.()}
      collapsed={collapsed}
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
    url: "/",
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

const Sidebar = ({ collapsed = false }) => {
  const handleGoToEstafeta = () => {
    window.open(
      "https://estafetap10-dev.estafeta.com/EstafetaPlugIn_UI/PruebaConexion"
    );
  };

  return (
    <Container collapsed={collapsed}>
      <Title collapsed={collapsed}>¿Qué haremos hoy?</Title>
      {links.map((link) => {
        return (
          <SidebarLink
            key={link.url}
            icon={link.icon}
            url={link.url}
            title={link.title}
            collapsed={collapsed}
          />
        );
      })}
      <Spacer height={50} />
      <SidebarButton onClick={handleGoToEstafeta} collapsed={collapsed}>
        <div className="icon">
          <EstafetaIcon />
        </div>
        Estafeta Plug In Administrador
      </SidebarButton>
    </Container>
  );
};

export default Sidebar;
