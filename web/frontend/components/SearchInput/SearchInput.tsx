import React from "react";
import { Container } from "./styled-components";
import SearchIcon from "../../icons/SearchIcon";
import { SearchImage } from "../../assets";

interface Props {
  placeholder?: string;
  width?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  styles?: React.CSSProperties;
  onlyNumbers?: boolean;
}

const SearchInput = ({
  placeholder,
  width,
  value,
  onChange,
  styles = {},
  onlyNumbers,
}: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyNumbers) {
      if (e.target.value.match(/^[0-9]*$/)) {
        onChange?.(e);
      }
      return;
    }

    onChange?.(e);
  };

  return (
    <Container style={width ? { ...styles, width } : styles}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      <img src={SearchImage} alt="search" />
    </Container>
  );
};

export default SearchInput;
