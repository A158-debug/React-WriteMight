import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './style';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  // from store-> postReducer it take posts and isLoading
  const { posts, isLoading } = useSelector((state) => state.postsReducer || {});

  //const postReducer =   useSelector((state) => state.postsReducer || {});
  //console.log("postReducer ",postReducer)

  //Posts is a object which contain all the array of memeries and 
  // currentPage and number of Pages

  const classes = useStyles();
 
  //if there is no posts then it retur No posts
  if (!Object.keys(posts).length && !isLoading) return 'No posts';


  // If loading is true then it show CircularProgress 
  // Otherwise it shows posts
  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.data?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
