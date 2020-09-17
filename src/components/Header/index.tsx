import React from 'react';

import { Container, Brand, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Brand>
        <Logo />
      </Brand>
    </Container>
  );
};

export default Header;
