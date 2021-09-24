import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { InfoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.title} image={InfoData.image} />
    <div>
      {InfoData.content}
    </div>  
  </Container>
);
export default Info;