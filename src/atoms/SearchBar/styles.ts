import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
    position: relative;
    width: 200px;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    border: 1px solid #0059b6;
    color: #0059b6;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0px 0px 17px -8px transparent;
    padding: 0 10px;
    padding-right: 2.5rem; /* Espaço para o ícone */

    &::placeholder {
        color: #0059b6;
    }

    &:focus {
        border-color: black;
        color: black;

        &::placeholder {
            color: black;
        }
    }
`;

export const SearchIcon = styled(FaSearch)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #0059b6;

    ${Input}:focus + & {
        color: black;
    }
`;
