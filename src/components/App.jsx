import React, { useState } from "react";
import { flex, h1 } from '../styles/style.module';

export default function App() {
  const [count, setCount] = useState(0);
  const [showImage, setShowImage] = useState(false);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className={flex}>
        <button onClick={incrementCount}>Plius 1</button>
        <button onClick={decrementCount}>Minus 1</button>
      </div>
      <div className={h1}>{count}</div>
      <div className={h1}><button onClick={() => setShowImage(!showImage)}>{showImage ? 'Hide ' : 'Show '}Image</button></div>
      {showImage && <div><img src={require('../images/vomit.jpg')} alt='Joke' /><img src={require('../images/fog.svg')} alt='Fog' /></div>}
    </div>
  );
}
