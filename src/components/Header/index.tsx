import React from 'react';
import { FiBell, FiMoreVertical } from 'react-icons/fi';

import {
  Container,
  Brand,
  Logo,
  PipeHeader,
  NavTop,
  NavBottom,
  PipeTitle,
  TrialUpate,
  NavTopActions,
  Notification,
  Avatar,
  Dots,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Brand>
        <Logo />
      </Brand>
      <PipeHeader>
        <NavTop>
          <PipeTitle>
            <span>Chamados de TI</span>
            <TrialUpate>
              - <a>Atualize agora</a>
            </TrialUpate>
          </PipeTitle>
          <NavTopActions>
            <Notification>
              <FiBell size={22} />
            </Notification>
            <Avatar>
              <span>A</span>
              <Dots>
                <FiMoreVertical size={22} />
              </Dots>
            </Avatar>
          </NavTopActions>
        </NavTop>
        <NavBottom>
          <span>Visualizar em Kanban</span>
          <span>Relatorios</span>
        </NavBottom>
      </PipeHeader>
    </Container>
  );
};

export default Header;
