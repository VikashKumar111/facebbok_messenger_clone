import React from 'react'
import {Card,CardContent,Typography} from '@mui/material';

const Message = (props) => {
  return (
      <Card>
        <CardContent>
          <Typography
            variant="h5" component="h2" color="black"
          >
           {props.username} : {props.text}
          </Typography>
        </CardContent>
      </Card>
  )
}

export default Message