import React from "react";
import {
  Container,
  SidebarLinkContainer,
  Title,
  LinkTitle,
} from "./styled-components";
import OrdersIcon from "../../icons/OrdersIcon";
import PickUpsIcon from "../../icons/PickUpsIcon";
import ShipmentsIcon from "../../icons/ShipmentsIcon";

interface LinkProps {
  icon: React.ReactNode;
  title: string;
  url?: string;
}

const SidebarLink = ({ icon, title }: LinkProps) => {
  return (
    <SidebarLinkContainer>
      {icon}
      <LinkTitle>{title}</LinkTitle>
    </SidebarLinkContainer>
  );
};

const Sidebar = () => {
  return (
    <Container>
      <Title>¿Qué haremos hoy?</Title>
      <SidebarLink icon={<OrdersIcon />} title="Órdenes" />
      <SidebarLink icon={<ShipmentsIcon />} title="Envíos" />
      <SidebarLink icon={<PickUpsIcon />} title="Recolecciones" />
    </Container>
  );
};

export default Sidebar;
