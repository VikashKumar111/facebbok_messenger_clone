import React ,{forwardRef} from 'react'
import './Message.css';
import {Card,CardContent,Typography} from '@mui/material';

const Message = forwardRef(({ message, username }, ref) => {
  
  const isUser = username === message.username;
  
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={ isUser ? 'message__usercard' : 'message__guestcard'}>
        <CardContent>
          <Typography
            variant="h5" component="h2" color="black"
          >
           {message.username} : {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>  
  )
})

export default Message