import React, { useState } from 'react';
import * as S from './styles';

const Menu = () => {
    const [isEventsOpen, setIsEventsOpen] = useState(false);

    const handleEventsClick = () => {
        setIsEventsOpen(!isEventsOpen);
    };

    return (
        <S.MenuContainer>
            <S.MenuItem>Home</S.MenuItem>
            <S.MenuItem onClick={handleEventsClick}>Eventos</S.MenuItem>
            {isEventsOpen && (
                <S.SubMenu>
                    <S.SubMenuItem>Maratonas de programação</S.SubMenuItem>
                    <S.SubMenuItem>Treinos Santa Mônica</S.SubMenuItem>
                </S.SubMenu>
            )}
            <S.MenuItem>Sobre</S.MenuItem>
            <S.MenuItem>Contato</S.MenuItem>
        </S.MenuContainer>
    );
};

export default Menu;
