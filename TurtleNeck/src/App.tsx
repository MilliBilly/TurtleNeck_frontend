import LoginPage from './pages/LoginPage'
import MyInfoPage from './pages/MyInfoPage'
import PostPage from './pages/PostPage'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { styled } from '@stitches/react';

const FullWindow = styled('div', {
  margin: 0,
  padding: 0
})

function App() {
  return (
    <FullWindow>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/post" element={<PostPage/>} />
          <Route path="/myinfo" element={<MyInfoPage/>} />
        </Routes>
      </BrowserRouter>
    </FullWindow>
  )
}

export default App
