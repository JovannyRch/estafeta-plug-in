import React from "react";

interface Props {
  width: number;
  height: number;
}

const Spacer = ({ width = 0, height = 0 }): JSX.Element => {
  return <div style={{ width: width, height: height }}></div>;
};

export default Spacer;
