import React from 'react';

import { Container, Label } from './styles';

interface CardProps {
  data: any;
  index: any;
  listIndex: any;
}

const Card: React.FC<CardProps> = ({ data, index, listIndex }) => {
  return (
    <Container>
      <header>
        {data.labels.map((label: any) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
};

export default Card;
