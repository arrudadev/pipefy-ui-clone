import React, { useState } from 'react';

import { Container } from './styles';

import { loadLists } from '../../services/api';
import List from '../List';

const data = loadLists();

const Board: React.FC = () => {
  const [lists, setLists] = useState(data);
  return (
    <Container>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </Container>
  );
};

export default Board;
