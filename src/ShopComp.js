import { NavBar } from './NavBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { ShopBody } from './ShopBody';
import { useState } from 'react';

export function ShopComp() {
const [state,setState]=useState(0);

  return (
    <>
      <NavBar state={state} setState={setState}/>
      <Header />
      <ShopBody state={state} setState={setState}/>
      <Footer />
    </>
  );
}
