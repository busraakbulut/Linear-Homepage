import React from 'react';
import { Container } from '../components/container';
import { Hero, HeroTitle } from '@/components/hero';
import { HeroSubtitle } from '../components/hero';
import Image from 'next/image';
import image from '../public/hero.webp';
import Header from '@/components/header';

export default function Homepage() {
 return (
  <div>
   <Container>
    <Hero>
     <HeroTitle>
      Linear is a better way
      <br />
      to build products
     </HeroTitle>
     <HeroSubtitle>
      Meet the new standard for modern software development.
      <br />
      Streamline issues, sprints, and product roadmaps.
     </HeroSubtitle>
     <Image src={image} alt="hero" width="1500" height="1500" />
    </Hero>
   </Container>
  </div>
 );
}
