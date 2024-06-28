import React, { useState } from 'react';
import Comp from "./Comp";
import LandingPage from "./LandingPage";
import Footer from './Footer';

const authors = [
  {author:"Маленький",books:["П6142","Г1636"]},
  {author:"Средний",books:["Г9812","П8612","П4612"]},
  {author:"Большой",books:["Г6712","Г8624","П8241","П6125"]}
]

const App = () => {
  return (
    <div>
      <LandingPage />
      <Comp authors={authors} />
      <Footer />
    </div>
  );
};

export default App;