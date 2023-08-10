import { useState } from "react";
import { WaybillsResponse } from "../types/Responses/WaybillsResponse";
import { useAuthenticatedFetch } from "./useAuthenticatedFetch";
import { base64ToBlob } from "../utils";

const useWaybills = () => {
  const authenticatedFetch = useAuthenticatedFetch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const downloadWaybill = async (waybillCode: string) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      document.body.style.cursor = "wait";
      const response = await authenticatedFetch(
        `/api/orders/waybills/?waybillCodes=${waybillCode}`
      );
      const data: WaybillsResponse = await response.json();

      if (data?.documentWaybill?.length === 0) {
        return;
      }

      const waybill = data?.documentWaybill[0];
      const pdfBlob = base64ToBlob(waybill.pdfFile);
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${waybillCode}.pdf`;
      link.click();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }
  };

  return { downloadWaybill };
};

export default useWaybills;
