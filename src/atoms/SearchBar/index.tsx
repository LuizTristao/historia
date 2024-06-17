import * as S from "./styles";

const SearchBar = () => {
    return (
        <S.Container>
            <S.Input type="text" placeholder="Pesquisar" />
            <S.SearchIcon />
        </S.Container>
    );
}

export default SearchBar;
