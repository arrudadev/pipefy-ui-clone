import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';

import { Container, HeaderInfo, CardsCount, HeaderActions } from './styles';

import Card from '../Card';

interface ListProps {
  data?: any;
  index?: any;
}

const List: React.FC<ListProps> = ({ data, index: listIndex }) => {
  return (
    <Container done={data.done}>
      <header>
        <HeaderInfo>
          <h2>{data.title}</h2>
          <CardsCount>
            <span>
              {data.cards.length} {data.cards.length > 1 ? 'cards' : 'card'}
            </span>
          </CardsCount>
        </HeaderInfo>
        <HeaderActions>
          {data.creatable && (
            <button type="button">
              <MdAdd size={24} color="#FFF" />
            </button>
          )}
          <FiMoreVertical size={24} />
        </HeaderActions>
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
