//1.9 useState. useRef.
//useState allows you to add a state to functional components. It allows you to add state to your components, making them dynamic and interactive.
//State Management: useState helps manage state within a component.
//Re-renders on Change: The component re-renders when the state changes.
//Batched Updates: React batches multiple state updates for performance.
//syntax 
//const [state, setState] = useState(initialValue);

//useRef primarily used for accessing and manipulating DOM elements directly. It persists values between renders without causing re-renders. The useRef hook returns a mutable ref object. 
//DOM Reference: Provides a way to reference and interact with DOM elements.
//No Re-renders on Change: Changing the ref value does not trigger a re-render.
//Persistent Values: Keeps the same object reference between renders.
//syntax 
//const myRef = useRef(initialValue);

import React, { useRef, useState } from 'react';

// Example 1: Counter using useState
function CounterWithState() {
  const [count, setCount] = useState<number>(0); // State type explicitly defined as number

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <h2>Counter with useState</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Example 2: Click counter using useRef
function ClickCounterWithRef() {
  const clickCountRef = useRef<number>(0); // Initialize ref to track click count
  const [count, setCount] = useState<number>(0); // useState for updating UI

  const handleClick = () => {
    clickCountRef.current += 1; // Increment the ref count
    setCount(clickCountRef.current); // Update the state to trigger re-render and show the updated count
  };

  return (
    <div>
      <h2>Click Counter with useRef</h2>
      <h3>You have clicked the button {count} times.</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Main App component combining both examples
function App() {
  return (
    <div>
      <h1>React Counter Examples</h1>
      <CounterWithState />
      <hr />
      <ClickCounterWithRef />
    </div>
  );
}

export default App;

