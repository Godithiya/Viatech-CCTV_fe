import React from 'react'
import Header from './Header'
import ButtonAudioAction from './ButtonAudioAction'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-screen h-screen flex flex-col bg-[#F1F1F1]'>
      <div className='w-full h-24 PX-5 bg-[#191919]'>
        <Header/>
      </div>
      <div className="w-screen flex flex-1 flex-col overflow-hidden px-28 py-5">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
