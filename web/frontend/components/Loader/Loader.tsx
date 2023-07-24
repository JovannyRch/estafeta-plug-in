import React from "react";
import Spinner, {
  ChildrenWrapper,
  LoaderBlock,
  LoaderWrapper,
} from "./styled-components";

const Loader = ({ height, children }) => (
  <LoaderWrapper height={height}>
    <ChildrenWrapper>{children}</ChildrenWrapper>
    <LoaderBlock>
      <Spinner />
    </LoaderBlock>
  </LoaderWrapper>
);

export default Loader;
