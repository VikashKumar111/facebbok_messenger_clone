import React, { useEffect, useState } from 'react';
import './App.css';
import { Button,FormControl ,InputLabel,Input } from '@mui/material';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';



function App() {
  const [input, setInput] = useState('');
  const [messeges, setMesseges] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messeges')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMesseges(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name!!')) 
  },[]) 
  
  const sendMessage = (event) => {
    event.preventDefault();
    
    db.collection('messeges').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
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
      <FlipMove>
        {
          messeges.map(({id, message }) => (
            <Message key={id} username={username} message={message} />
         ))
        }
      </FlipMove>  
    </div>
  );
}

export default App;
