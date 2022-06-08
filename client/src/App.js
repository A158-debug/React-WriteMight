import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={() => <Redirect to="/posts" />} />
          <Route path="/posts" element={<Home/>} />
          <Route path="/posts/search" element={<Home/>} />
          <Route path="/posts/:id" element={<PostDetails/>} />
          <Route path={['/creators/:name', '/tags/:name']} element ={<CreatorOrTag/>} />
          <Route path="/auth" element={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;