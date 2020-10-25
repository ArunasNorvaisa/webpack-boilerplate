import React from "react";
import { render } from "react-dom";
import HelloWorld from './components/HelloWorld';

const wrapper = document.getElementById('app');

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

render(<App />, wrapper);
