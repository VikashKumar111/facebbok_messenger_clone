import React, { useState } from 'react';
import './App.css';
import { Button,FormControl ,InputLabel,Input } from '@mui/material';
import Message from './Message';


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
       <FormControl>
        <InputLabel >Enter a message....</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send message</Button>
       </FormControl>
      </form>
      
      {messeges.map(message => (
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;
