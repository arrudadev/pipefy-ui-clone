import React from 'react';
import { FaRobot } from 'react-icons/fa';
import {
  FiCommand,
  FiDatabase,
  FiLayout,
  FiGlobe,
  FiFileText,
  FiHelpCircle,
  FiMessageCircle,
} from 'react-icons/fi';

import {
  Container,
  Aside,
  Inner,
  Menu,
  UserMenu,
  MenuItem,
  Divider,
} from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <Aside>
        <Inner>
          <Menu>
            <MenuItem>
              <FiCommand size={22} />
            </MenuItem>
            <MenuItem>
              <FiDatabase size={22} />
            </MenuItem>
            <MenuItem>
              <FiLayout size={22} />
            </MenuItem>
            <MenuItem>
              <FaRobot size={22} />
            </MenuItem>
            <MenuItem>
              <FiGlobe size={22} />
            </MenuItem>
          </Menu>
          <UserMenu>
            <MenuItem>
              <FiFileText size={22} />
            </MenuItem>
            <Divider />
            <MenuItem>Help</MenuItem>
            <MenuItem>
              <FiHelpCircle size={22} />
            </MenuItem>
            <MenuItem>
              <FiMessageCircle size={22} />
            </MenuItem>
          </UserMenu>
        </Inner>
      </Aside>
    </Container>
  );
};

export default Navigation;
