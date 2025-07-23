import React from 'react';
import { use } from 'react';
import { useState } from 'react';
function ColorFile() {
    const [color ,setcolor] =useState('olive');

  function yellow() {
    document.body.style.backgroundColor = 'yellow';
  }

  function green() {
    document.body.style.backgroundColor = 'green';
  }

  function blue() {
    document.body.style.backgroundColor = 'blue';
  }
    function red() {
    document.body.style.backgroundColor = 'red';
  }

  return (
   
    <div buttons="flex justify-center space-x-4 mt-10 ">
      <button onClick={yellow}>Yellow</button>
      <button onClick={green}>Green</button>
      <button onClick={blue}>Blue</button>
       <button onClick={red}>red</button>
    </div>
  
  );
}

export default ColorFile;
