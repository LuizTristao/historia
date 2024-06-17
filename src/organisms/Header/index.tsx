import * as S from './styles';
import Logo from '../../molecules/Logo';
import Menu from '../../organisms/Menu';
import SearchBar from '../../atoms/SearchBar';

const Header = () => {
    return (
        <S.Box>
            <Logo />
            <Menu />
            <SearchBar />
        </S.Box>
    );
}

export default Header;
