
import { useTranslation } from "react-i18next";
import ShippingView from "../views/ShippingView";

export default function Orders() {
    const { t } = useTranslation();
    return (
        <ShippingView title="Recolecciones" />
    );
}