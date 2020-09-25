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

  > span {
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

export const NavBottom = styled.div`
  width: 100%;
  height: 50px;

  overflow: auto;
  overflow-y: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabStrip = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 10px;
  }
`;

export const Tab = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`;

export const TabContent = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  padding: 15px 3px 14px;
  margin-right: 5px;

  opacity: 0.6;
  border-bottom: 3px solid transparent;

  &:hover,
  &.active {
    color: #fff;
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    opacity: 1;

    cursor: pointer;
  }

  > span {
    font-weight: bold;

    margin-left: 5px;
  }
`;

export const Dropdown = styled.span`
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

export const NavBottomActions = styled.div`
  display: flex;
  align-items: center;
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.1);

  border-radius: 3px;
  border: 0;

  color: #fff;

  font-weight: bold;

  margin-right: 10px;
  padding: 5px 10px 6px;

  min-height: 30px;
  max-height: 30px;

  position: relative;
  opacity: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.2);

    cursor: pointer;
  }
`;

export const NavBottomActionItem = styled.div`
  color: #fff;

  padding: 15px 3px 14px;
  margin-right: 8px;

  display: flex;
  align-items: center;

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
