import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

import Card from '../Card';

interface ListProps {
  data?: any;
  index?: any;
}

const List: React.FC<ListProps> = ({ data, index: listIndex }) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
