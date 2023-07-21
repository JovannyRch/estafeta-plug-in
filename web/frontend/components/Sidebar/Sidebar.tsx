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
import { Link } from "@shopify/polaris";

interface LinkProps {
  icon: React.ReactNode;
  title: string;
  url?: string;
}

const SidebarLink = ({ icon, title, url }: LinkProps) => {
  return (
    <SidebarLinkContainer>
      {icon}
      <Link url={url}>{title}</Link>
    </SidebarLinkContainer>
  );
};

const Sidebar = () => {
  return (
    <Container>
      <Title>¿Qué haremos hoy?</Title>
      <SidebarLink icon={<OrdersIcon />} url="/orders" title="Órdenes" />
      <SidebarLink icon={<ShipmentsIcon />} url="/shipments" title="Envíos" />
      <SidebarLink
        icon={<PickUpsIcon />}
        url="/pickups"
        title="Recolecciones"
      />
    </Container>
  );
};

export default Sidebar;
