import styled from 'styled-components';

interface Props {
  done?: boolean;
}

export const Container = styled.div<Props>`
  height: 100%;

  padding: 0 15px;

  flex: 0 0 320px;

  opacity: ${props => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 42px;

    h2 {
      font-weight: 600;
      font-size: 14px;

      color: #213547;

      line-height: 20px;
      max-width: 210px;

      display: inline-block;

      text-overflow: ellipsis;
      overflow: hidden;

      white-space: nowrap;

      margin-bottom: 2px;
    }

    button {
      width: 42px;
      height: 42px;

      border-radius: 18px;
      border: 0;

      background: #3b5bfd;

      cursor: pointer;

      &:hover {
        background: #243da3;
      }
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const HeaderInfo = styled.div`
  max-width: 220px;
`;

export const HeaderActions = styled.div`
  > svg circle {
    color: #9aaabe;
  }

  > svg {
    &:hover {
      cursor: pointer;

      > circle {
        color: #3b5bfd;
      }
    }
  }
`;

export const CardsCount = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: #748396;

    margin: 0 3px 0 0;

    position: relative;

    display: inline-flex;

    font-size: 12px;
  }
`;
