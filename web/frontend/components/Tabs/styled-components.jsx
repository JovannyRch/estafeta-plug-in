import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 35px;
    align-items: center;
`;

export const TabContainer = styled.div`
    color: var(--bloq, #C7C7C7);
    text-align: center;
    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    position: relative;
    user-select: none;


    &.active {
        color: var(--tipografa, #12263c);
    }
`;

export const ActiveLine = styled.div`
    position: absolute;
    bottom: -3px;
    height: 3px;
    width: calc(100% - 14px);
    background-color: #12263c;
    margin-left: 7px;
`;