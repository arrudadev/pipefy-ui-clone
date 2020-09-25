import React from 'react';
import { FaSortDown, FaWrench } from 'react-icons/fa';
import {
  FiBell,
  FiMoreVertical,
  FiTrello,
  FiLayout,
  FiUsers,
  FiFilter,
  FiSettings,
} from 'react-icons/fi';

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
  TabStrip,
  Tab,
  TabContent,
  Dropdown,
  NavBottomActions,
  ShareButton,
  NavBottomActionItem,
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
              - <span>Atualize agora</span>
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
          <TabStrip>
            <Tab>
              <TabContent className="active">
                <FiTrello size={18} />
                <span>Visualizar em Kanban</span>
              </TabContent>
              <Dropdown>
                <FaSortDown size={18} />
              </Dropdown>
            </Tab>
            <Tab>
              <TabContent>
                <FiLayout size={18} />
                <span>Relatorios</span>
              </TabContent>
              <Dropdown>
                <FaSortDown size={18} />
              </Dropdown>
            </Tab>
          </TabStrip>
          <NavBottomActions>
            <ShareButton>Compartilhar</ShareButton>
            <NavBottomActionItem>
              <FiUsers size={22} />
            </NavBottomActionItem>
            <NavBottomActionItem>
              <FiLayout size={22} />
            </NavBottomActionItem>
            <NavBottomActionItem>
              <FiFilter size={22} />
            </NavBottomActionItem>
            <NavBottomActionItem>
              <FiSettings size={22} />
            </NavBottomActionItem>
            <NavBottomActionItem>
              <FaWrench size={22} />
            </NavBottomActionItem>
          </NavBottomActions>
        </NavBottom>
      </PipeHeader>
    </Container>
  );
};

export default Header;
