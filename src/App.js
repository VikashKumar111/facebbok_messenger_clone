import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messeges, setMesseges] = useState(["hello", "Welcome!", "Join our awesome newsletter!"]);
  // console.log(input);
  console.log(messeges);
  
  const sendMessage = (event) => {
    event.preventDefault();
    setMesseges([...messeges, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1> Hello programmmers community </h1>
      
      <form>
       <input value={input} onChange={event => setInput(event.target.value)} />
       <button type='submit' onClick={sendMessage}>Send message</button>
      </form>
      

      {messeges.map(message => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
