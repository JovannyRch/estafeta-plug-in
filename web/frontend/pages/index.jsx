
import { useTranslation } from "react-i18next";
import ShippingView from "../views/ShippingView";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <ShippingView />
  );
}


{/* <Page narrowWidth>
<TitleBar title={"Estafeta Plug"} primaryAction={null} /> */}