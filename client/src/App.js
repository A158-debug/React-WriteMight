import React,{useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from'./components/Posts/Posts';
import Form from'./components/Form/Form';

const App = () => {
  const [currentId, setCurrentId] = useState(0);

  return (
    <>
      <Container maxWidth="lg">
        <AppBar postion="static" color="inherit">
          <Typography variant="h2" align="center">WriteMight</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing="3">
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  )
}

export default App