import {
  Page,
  Layout,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import ShippingTable from "../components/ShippingTable/ShippingTable";
import ShippingView from "../views/ShippingView";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <ShippingView />
  );
}


{/* <Page narrowWidth>
<TitleBar title={"Estafeta Plug"} primaryAction={null} /> */}