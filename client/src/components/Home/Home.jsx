import React, { useState,useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import {useDispatch} from 'react-redux';
import {getPosts} from '../../action/index.js';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId, dispatch]);  //don;t know why is dispatch is 2nd paramter
  return (
    <>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />{" "}
              {/* Reason to pass currentID  see later */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />{" "}
              {/* Reason to pass currentID  see later */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Home;
