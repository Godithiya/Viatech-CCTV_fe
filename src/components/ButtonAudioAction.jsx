import React from 'react'

const ButtonAudioAction = ({title, desc}) => {
  return (
    <div className={`w-44 h-28 rounded-xl bg-[#2b5ebd] drop-shadow-xl`}>
      <div className={`w-full h-[102px] rounded-xl bg-[#3776EB] flex flex-col justify-center items-center pt-3 gap-1 text-white`}>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-base font-[400]'>{desc}</p>
        <div className="w-auto flex gap-1 mt-1">
            <div className="w-1.5 h-1.5 bg-[#386ED2] rounded-full inset-shadow-2xs shadow-[#2b5ebd] "/>
            <div className="w-1.5 h-1.5 bg-[#386ED2] rounded-full inset-shadow-2xs shadow-[#2b5ebd] "/>
            <div className="w-1.5 h-1.5 bg-[#386ED2] rounded-full inset-shadow-2xs shadow-[#2b5ebd] "/>
        </div>
      </div>
    </div>
  )
}

export default ButtonAudioAction
