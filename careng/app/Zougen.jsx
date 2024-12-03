// Counter.js
"use client";
import React, { useState } from "react";

const Counter = ({ onCountChange }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 9) {
      setCount((prev) => prev + 1);
      onCountChange(""); // メッセージをクリア
    } else {
      onCountChange("これ以上増やせません！");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      onCountChange("");
    }
  };

  const reset = () => {
    setCount(0);
    onCountChange("");
  };

  return (
    <div>
      <h2>カウント: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default Counter;