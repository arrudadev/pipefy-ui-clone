import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 5px;
  right: 0;

  width: 85px;
`;

export const Button = styled.button`
  position: relative;
  right: 0;
  bottom: auto;

  margin-bottom: 15px;

  border-radius: 50%;
  border: 0;

  background: #3b5bfd;

  width: 60px;
  height: 60px;

  z-index: 10;

  &:hover {
    background: #627cfd;

    cursor: pointer;
  }
`;
