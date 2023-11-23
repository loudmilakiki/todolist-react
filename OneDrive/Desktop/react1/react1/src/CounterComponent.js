import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); //якщо додаємо по 1
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);    // якщо треба додати більше ніж 1
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    // setCount((prevState) => prevState - 1);
    // setCount((prevState) => prevState - 1);
    // setCount((prevState) => prevState - 1);    // якщо треба відняти більше ніж 1
    // setCount((prevState) => prevState - 1);
    // setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment me</button>
      <button onClick={decrement}>Decrement me</button>
    </div>
  );
};

export default CounterComponent;
