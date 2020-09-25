import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 56px;

  background-color: #fff;

  position: fixed;
  top: 0;

  width: 56px;
  height: 100%;
  min-height: 100vh;

  z-index: 10;

  overflow-y: auto;
`;

export const Aside = styled.aside`
  width: 56px;
  height: 100%;
  min-height: 100vh;
`;

export const Inner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  z-index: 10;

  width: 56px;
  height: 100%;
  min-height: 100vh;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px 0;

  text-align: center;
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px 0;

  text-align: center;
`;

export const MenuItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  color: #9aaabe;

  font-weight: bold;

  height: 40px;

  text-decoration: none;

  &:hover {
    cursor: pointer;

    > svg path,
    svg ellipse,
    svg rect,
    svg line,
    svg circle {
      color: #3b5bfd;
    }
  }
`;

export const Divider = styled.div`
  background: #e6ecf5;

  width: 100%;
  height: 1px;

  margin: 16px 0;
`;
