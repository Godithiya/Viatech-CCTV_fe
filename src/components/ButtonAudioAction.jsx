import React from 'react';

const ButtonAudioAction = ({ title, desc, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`min-w-[140px] max-w-[176px] flex-1 select-none h-28 rounded-xl transition-all duration-200 cursor-pointer 
        ${active === title ? ' drop-shadow-2xl scale-95' : 'bg-[#2b5ebd] drop-shadow-xl'}
      `}
    > 
      <div className="w-full h-[102px] rounded-xl bg-[#3776EB] flex flex-col justify-center items-center pt-3 gap-1 text-white">
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-base font-[400]'>{desc}</p>
        <div className="w-auto flex gap-1 mt-1">
          <div className="w-1.5 h-1.5 bg-[#386ED2] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.4)]"/>
          <div className="w-1.5 h-1.5 bg-[#386ED2] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.4)]"/>
          <div className="w-1.5 h-1.5 bg-[#386ED2] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.4)]"/>
        </div>
      </div>
    </div>
  );
};

export default ButtonAudioAction;
