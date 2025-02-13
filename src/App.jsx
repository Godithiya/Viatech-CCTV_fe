import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './screen/auth/Login';
import Layout from './components/Layout';
import Home from './screen/main/Home';
import TransclipLog from './components/TRANSCRIPT';
import TRANSCRIPT from './components/TRANSCRIPT';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isLogin) {
    return (
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/trans' element={<TRANSCRIPT />}></Route>
    </Routes>
  )
}

export default App
