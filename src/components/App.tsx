import React, { useState } from "react";
import '../styles/style.module.scss';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [showImage, setShowImage] = useState<boolean>(false);

  function incrementCount() {
    setCount((prevState: number) => prevState + 1);
  }

  function decrementCount() {
    setCount((prevState: number) => prevState - 1);
  }

  return (
    <div>
      <div className="flex">
        <button onClick={incrementCount}>Plius 1</button>
        <button onClick={decrementCount}>Minus 1</button>
      </div>
      <div className="h1">{count}</div>
      <div className="h1"><button onClick={() => setShowImage(prevState => !prevState)}>{showImage ? 'Hide ' : 'Show '}Image</button></div>
      {showImage && <div><img src={require('../images/vomit.jpg')} alt='Joke' /><img src={require('../images/fog.svg')} alt='Fog' /></div>}
    </div>
  );
}
