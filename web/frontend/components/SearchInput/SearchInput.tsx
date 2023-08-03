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
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]*$/)) {
      onChange?.(e);
    }
  };

  return (
    <Container style={width ? { width } : {}}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      <SearchIcon />
    </Container>
  );
};

export default SearchInput;
