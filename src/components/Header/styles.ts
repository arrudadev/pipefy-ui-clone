import styled from 'styled-components';

import { ReactComponent as LogoWhite } from '../../assets/logo-white.svg';

export const Container = styled.header`
  height: 90px;

  padding: 0 30px;

  background: #3b5bfd;
  color: #fff;

  display: flex;
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

export const PipeHeader = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-left: 12px;
`;

export const NavTop = styled.div`
  height: 40px;

  padding-top: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PipeTitle = styled.div`
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  color: #fff;

  display: flex;
`;

export const TrialUpate = styled.div`
  color: #ffca78;

  font-weight: bold;
  font-size: 14px;

  margin-left: 10px;

  > a {
    color: #ffca78;
    font-weight: bold;
    margin-left: 3px;
    text-decoration: underline;

    &:hover {
      color: #fff;
    }
  }
`;

export const NavTopActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  max-width: 270px;
`;

export const Notification = styled.div`
  > svg path {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    cursor: pointer;

    > svg path {
      color: #fff;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  margin-left: 10px;

  padding: 3px;

  position: relative;

  width: 60px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  > span {
    max-height: 28px;
    height: 28px;
    width: 28px;

    border-radius: 3px;

    background: #179c20;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Dots = styled.div`
  padding-top: 4px;
  padding-left: 6px;

  > svg {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    cursor: pointer;

    > svg {
      color: #fff;
    }
  }
`;

export const NavBottom = styled.div``;
