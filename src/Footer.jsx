import React, { useState } from 'react';

const Footer = () => {

  const [shipPosition, setShipPosition] = useState({ x: 0, y: 0, backwords:false});

  const changeShipPosition = () => {
    if(shipPosition.x<document.getElementById("foot").offsetWidth-document.getElementById("foot").offsetWidth/4){
      for(let i=30;i>3;i--){
        for(let j=1;j<i;j+=i/5){
          setTimeout(() => {
            setShipPosition(prev => ({ ...prev, x: prev.x + 1 }));
          }, 3000/i);
      } 
      }
    } 
    else {
      for(let i=30;i>3;i--){
        for(let j=1;j<i;j+=i/5){
          setTimeout(() => {
            setShipPosition(prev => ({ ...prev, x: prev.x - 1 }));
          }, 3000/i);
      } 
      }
    }
    console.log(shipPosition.x);
  };
  
  return (

    <footer id="foot">
    <img
    src="ship.png"
    width={200}
    height={200}
    onClick={() => changeShipPosition()}
    style={{ transform: `translate(${shipPosition.x}px, ${shipPosition.y}px)` }}/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </footer>
  );
};

export default Footer;