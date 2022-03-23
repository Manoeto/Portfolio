import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection main center>
      <SectionTitle>
        Hi!! <br/>
      Welcome to Manoeto´s Portfolio
      </SectionTitle>
      <SectionText>
        Escrever o meu Why?
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;