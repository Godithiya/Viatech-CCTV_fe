import React from 'react'
import ButtonAudioAction from '../../components/ButtonAudioAction'
import CCTVDisplay from '../../components/CCTVDisplay'
import TRANSCRIPT from '../../components/TRANSCRIPT'

const Home = () => {
  return (
    <div className='space-y-3' >
        <CCTVDisplay/>
        <TRANSCRIPT/>
    </div>
  )
}

export default Home
