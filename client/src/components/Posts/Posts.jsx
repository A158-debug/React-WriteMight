import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./style";

const Posts = ({ currentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (!posts.lemgth() ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={currentId} />
        </Grid>
      ))}
    </Grid>
  ));
};

export default Posts;