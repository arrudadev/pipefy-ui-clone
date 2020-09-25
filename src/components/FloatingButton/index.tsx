import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Button } from './styles';

const FloatingButton: React.FC = () => {
  return (
    <Container>
      <Button>
        <MdAdd size={36} color="#FFF" />
      </Button>
    </Container>
  );
};

export default FloatingButton;
