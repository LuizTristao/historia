import React from 'react';
import { StyledLogo } from './styles';
import LogoHeader from '../../assets/logo2.png';

const Logo: React.FC = () => {
    return <StyledLogo src={LogoHeader} alt="Logo Hero Header" />;
};

export default Logo;
