import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex flex-col bg-[#F1F1F1]'>
      <div className='w-full h-24 bg-[#191919]'>
        <Header/>
      </div>
      <div className="w-screen flex flex-1 flex-col px-32 py-11">
        {children}
      </div>
    </div>
  )
}

export default Layout
