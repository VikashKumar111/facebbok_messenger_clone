import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl ,Input } from '@mui/material';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';



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
      <img src='https://scontent.fdel3-3.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=C4YvE4W8WkgAX822_6N&_nc_ht=scontent.fdel3-3.fna&oh=00_AfCOrP9d6brfWb5JaNGTUXwIO-3-b25Ru-xJzH4az0F5CA&oe=649F52BD ' alt='logo'/>
      <h2>Welcome {username}</h2>
      
      <form className='app__form'>
       <FormControl className='app__formControl'>
        <Input  placeholder='Enter the message....' value={input} onChange={event => setInput(event.target.value)} />
          
        <IconButton  disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon/>
        </IconButton>
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
