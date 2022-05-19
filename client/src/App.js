import React,{useEffect, useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles'
import {useDispatch} from 'redux';

import Posts from'./components/Posts/Posts';
import Form from'./components/Form/Form';
import {getPosts} from './actions/posts';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId, dispatch]);  //don;t know why is dispatch is 2nd paramter

  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} postion="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">WriteMight</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing="3">
              <Grid item xs={12} sm={7}>
               <Posts setCurrentId={setCurrentId} />  {/* Reason to pass currentID  see later */}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />   {/* Reason to pass currentID  see later */}
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  )
}

export default App