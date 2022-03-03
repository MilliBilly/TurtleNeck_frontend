import LoginPage from './pages/LoginPage'
import MyInfoPage from './pages/MyInfoPage'
import PostPage from './pages/PostPage'
import theme from './style/theme'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { styled } from '@stitches/react';

const FullWindow = styled('div', {
  border: 'solid 1px'
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
