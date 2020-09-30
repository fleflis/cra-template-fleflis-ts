import React, { useState } from 'react';

import Container from '../../components/Container';

const Home: React.FC = () => {
  const [name] = useState('world');
  return (
    <Container>
      <h1>Hello, {name}!</h1>
      <p>
        You can change this text on <code>src/pages/home/index.tsx</code>, save
        and preview here!
      </p>
    </Container>
  );
};

export default Home;
