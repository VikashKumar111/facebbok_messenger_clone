import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messeges, setMesseges] = useState(["hello", "Welcome!", "Join our awesome newsletter!"]);
  // console.log(input);
  console.log(messeges);
  
  const sendMessage = (event) => {
    setMesseges([...messeges, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1> Hello programmmers community </h1>

      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;
