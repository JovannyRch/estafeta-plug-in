import { useEffect, useRef } from "react";

function useDidUpdateEffect(fn: () => void, inputs: any[]) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) return fn();
    didMountRef.current = true;
  }, inputs);
}

export default useDidUpdateEffect;
