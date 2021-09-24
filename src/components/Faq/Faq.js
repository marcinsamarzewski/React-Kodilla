import React from 'react';
import { FaqData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero titleText={FaqData.title} image={FaqData.image} />
    <div>
      {FaqData.content}
    </div>  
  </Container>
);

export default Faq; 