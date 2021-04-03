import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Container, Grid } from '@material-ui/core';

export function Dashboard() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const requestGreeting = async (name) => {
    const result = await axios.get(`/api/users/?username=${name}`);
    console.log(result)
    setGreeting(result.data);
  };

  useEffect(() => {
    requestGreeting(name);
  }, [name]);

  return (
    <Grid container sm direction="column" justify="space-evenly" alignItems="center">
    
        <Container flexWrap="wrap" justifyContent="center">
          <h1>Welcome to the Server Echo Chamber</h1>
          <h3>Type a message in the box below and watch the server echo it back.</h3>
          <h5>Please view console.log messages for proof that response is coming from the server.</h5><br/>
        
        <h4>Your Message</h4>
        <TextField
          fullWidth
          color="primary"
          placeholder="Start typing here"
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>

        <h4>Server's Echo</h4>
        <h1>{greeting}</h1>
        </Container>

    </Grid>
  );
}
