import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    cursor: pointer;
`;


interface IconButtonProps {
    children: React.ReactNode
    onClick?: () => void
}


const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <Container onClick={onClick}>{children}</Container>
  )
}

export default IconButton