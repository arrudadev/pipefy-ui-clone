import styled from 'styled-components';

import { ReactComponent as LogoWhite } from '../../assets/logo-white.svg';

export const Container = styled.header`
  height: 90px;

  padding: 0 30px;

  background: #3b5bfd;
  color: #fff;

  display: flex;
  align-items: center;
`;

export const Brand = styled.div`
  width: 140px;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(36, 61, 163, 0.3);
    cursor: pointer;

    transition: background 500ms ease-in-out;
  }
`;

export const Logo = styled(LogoWhite)`
  max-height: 70px;
  max-width: 116px;

  width: 90px;
  height: 30px;

  border: 0;

  padding: 0;
  margin: 0;
`;
