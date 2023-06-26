import React, { useEffect, useState } from 'react';
import './App.css';
import { Button,FormControl ,InputLabel,Input } from '@mui/material';
import Message from './Message';


function App() {
  const [input, setInput] = useState('');
  const [messeges, setMesseges] = useState([
    { username: 'sonny', text: 'hey guys' },
    { username: 'qazi', text: 'whats up' },
    { username: 'vikash', text: 'welcome boys' }
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name!!')) 
  },[]) 
  
  const sendMessage = (event) => {
    event.preventDefault();
    setMesseges([...messeges, { username: username, text: input} ]);
    setInput('');
  }
  return (
    <div className="App">
      <h1> Hello programmmers community </h1>
      <h2>Welcome {username}</h2>
      
      <form>
       <FormControl>
        <InputLabel >Enter a message....</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send message</Button>
       </FormControl>
      </form>
      
      {messeges.map(message => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
