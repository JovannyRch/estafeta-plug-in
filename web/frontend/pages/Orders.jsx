
import { useTranslation } from "react-i18next";
import OrdersView from "../views/OrdersView";

export default function Orders() {
    const { t } = useTranslation();
    return (
        <OrdersView />
    );
}