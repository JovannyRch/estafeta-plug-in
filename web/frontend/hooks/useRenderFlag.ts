import { useEffect, useState } from "react";

const useRenderFlag = () => {
  const [renderFlag, setFlag] = useState(true);

  const forceReRender = () => {
    setFlag(false);
  };

  useEffect(() => {
    if (!renderFlag) {
      setFlag(true);
    }
  }, [renderFlag]);

  return { renderFlag, forceReRender };
};

export default useRenderFlag;
