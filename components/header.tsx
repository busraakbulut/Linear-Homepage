import Image from 'next/image';
import React from 'react';
import image from '@/public/brandAssets/logo-light.png';
import Link from 'next/link';
import { Container } from './container';

const Header = () => {
 return (
  <header className="flex top-0 left-0 w-full">
   <Container className="flex h-[var(--navigation-height)]">
    <Link className="flex items-center text-md" href="/">
     <Image className="m-4" src={image} alt="hero" width="18" height="18" />
     Linear
    </Link>

    <nav className="h-full">
     <ul className="flex items-center text-md h-full [&_a]:text-sm [&_li]:ml-6">
      <li>
       <Link href="#">Features</Link>
      </li>
      <li>
       <Link href="#">Method</Link>
      </li>
      <li>
       <Link href="#">Customers</Link>
      </li>
      <li>
       <Link href="#">Changelog</Link>
      </li>
      <li>
       <Link href="#">Integrations</Link>
      </li>
      <li>
       <Link href="#">Pricing</Link>
      </li>
      <li>
       <Link href="#">Company</Link>
      </li>
     </ul>
    </nav>
   </Container>
  </header>
 );
};

export default Header;
