// App.js
"use client";
import React, { useState } from "react";
import Counter from "./Zougen";
import Message from "./clickConter";
import FetchExample from "./fetch";
const App = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>増減カウンター</h1>
      <Counter onCountChange={setMessage} />
      <Message text={message} />
      <FetchExample></FetchExample>
    </div>
  );
};

export default App;
