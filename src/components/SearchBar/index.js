import React from 'react';

import { Container } from './styles';

function SearchBar( props ) {
  return (
    <Container>
      <input {...props}/>
    </Container>
  );
}

export default SearchBar;