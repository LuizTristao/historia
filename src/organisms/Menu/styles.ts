import styled from 'styled-components';

export const MenuContainer = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
    position: relative;
`;

export const MenuItem = styled.li`
    cursor: pointer;
    position: relative;

    &:hover {
        color: #0059b6;
    }
`;

export const SubMenu = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 10px 0;
    margin: 0;
    z-index: 1000;
`;

export const SubMenuItem = styled.li`
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: #f1f1f1;
    }
`;
