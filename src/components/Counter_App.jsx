import '../App.css';
import { useState } from 'react';

const Counter_App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count => count + 1);
  };
  const decrementHandler = () => {
    setCount(count => count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Counter App Using React JS</h3>
      <h1>Count: {count}</h1>
      <button onClick={incrementHandler} className="btn" disabled={count >= 5}>
        Increment
      </button>
      <button onClick={decrementHandler} className="btn" disabled={count <= -5}>
        Decrement
      </button>
      <button onClick={resetHandler} className="btn">
        Reset
      </button>
    </div>
  );
};

export default Counter_App;
