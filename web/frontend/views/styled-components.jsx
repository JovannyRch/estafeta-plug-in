import styled from 'styled-components';

export const SyncButton = styled.div`
    cursor: pointer;
    margin-bottom: 28px;
    color: var(--tipografa, #12263C);
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    width: max-content;
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px 24px;
    border-radius: 8px;
`;


export const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
`;

export const DropdownWithInputContainer = styled.div`
    display: flex;
    background-color: var(--backgorunds, #fff);
    border: 1px solid #12263c;
    border-left: none;
    border-radius: 7px; 

    align-items: center;
    justify-content: flex-start;

    .trigger{
        border: none;
        outline: 1px solid #12263c;
    }
`;