import { useAppQuery } from "./useAppQuery";

const userOrders = () => {
  const { data: orders } = useAppQuery({
    url: "/api/orders",
    reactQueryOptions: {},
  });

  return {
    orders,
  };
};

export default userOrders;
