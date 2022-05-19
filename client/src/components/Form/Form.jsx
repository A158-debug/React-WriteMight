import React, { useState } from "react";
import useStyles from "./style";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { createPost, upDatePost } from "../../reducers/posts";
import FileBase from "redux-file-base64";
import { useDispatch, useSelector } from "react-redux";
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(upDatePost(currentId, postData));
      // clear();
    }
  };
  return (
    <>
      <Paper className={classes.papaer}>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <Typography variant="h6"></Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />

          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />

          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />

          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
        </form>
      </Paper>
    </>
  );
};

export default Form;
