import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './screen/auth/Login';
import Layout from './components/Layout';
import Home from './screen/main/Home';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

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
    </Routes>
  )
}

export default App
