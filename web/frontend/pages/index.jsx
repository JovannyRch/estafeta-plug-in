import ShippingView from "../views/ShippingView";
/* import { useAppQuery } from "../hooks"; */

export default function HomePage() {

  /* const {
    data,
  } = useAppQuery({
    url: "/api/token",
    reactQueryOptions: {
      onSuccess: () => {
        console.log("data", data);
      },
    },
  }); */


  return (
    <ShippingView />
  );
}


{/* <Page narrowWidth>
<TitleBar title={"Estafeta Plug"} primaryAction={null} /> */}