import React from "react";
import Spinner, {
  ChildrenWrapper,
  LoaderBlock,
  LoaderWrapper,
} from "./styled-components";
import { LoaderImage } from "../../assets";

const Loader = ({ height }) => (
  <LoaderWrapper height={height}>
    <ChildrenWrapper>
      <img src={LoaderImage} width={250} />
    </ChildrenWrapper>
  </LoaderWrapper>
);

export default Loader;
