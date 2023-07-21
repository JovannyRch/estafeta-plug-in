import React from "react";
import { Container } from "./styled-components";
import SearchIcon from "../../icons/SearchIcon";

interface Props {
  placeholder?: string;
  width?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ placeholder, width, value, onChange }: Props) => {
  return (
    <Container style={width ? { width } : {}}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SearchIcon />
    </Container>
  );
};

export default SearchInput;
