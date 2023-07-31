import userOrders from "../hooks/userOrders";
import ShippingView from "../views/ShippingView";

export default function HomePage() {

  const { orders } = userOrders();

  console.log("orders", orders);

  return (
    <ShippingView />
  );
}
