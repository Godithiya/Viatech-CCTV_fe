import React from 'react';
import ButtonAudioAction from './ButtonAudioAction';

const TRANSCRIPT = () => {
  const dataButtonAudioAction = [
    {
      title : 'P1',
      dec : 'Preset audio 1'
    },
    {
      title : 'P2',
      dec : 'Preset audio 2'
    },
    {
      title : 'P3',
      dec : 'Preset audio 3'
    },
    {
      title : 'P4',
      dec : 'Preset audio 4'
    },
  ]
  const dataTranscript = [
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
  ];

  return (
    <div className='w-full  flex flex-col'>
<div className='flex h-[200px] gap-3 flex-1'>
  <div className='flex items-center flex-col flex-1'>
    <div className='w-full flex items-center gap-2'>
      <span className='w-full bg-[#D5D5D5] h-[1px] block' />
      <h1 className='w-[250px] text-center text-sm'>AUDIO ACTION</h1>
      <span className='w-full bg-[#D5D5D5] h-[1px] block' />
    </div>
    <div className='flex gap-5 p-5 flex-wrap justify-center w-full'>
      {dataButtonAudioAction.map((val) => (
        <ButtonAudioAction key={val.title} desc={val.dec} title={val.title}/>
      ))}
    </div>
  </div>
  <div className='flex items-center gap-1 flex-1'>
    <div className='w-full h-[130px] rounded-md text-white text-xl bg-[#d2452f]' >
      <button className='w-full h-[120px] rounded-md text-white text-xl bg-[#FF391F]'>
        HOLD TO TALK
      </button>
    </div>
  </div>
</div>
      <div className="w-full  flex-1 flex h-">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-base font-semibold">TRANSCRIPT TEXT</h1>
          <textarea
            name="transcriptText"
            id="transcriptText"
            className="bg-[#F6F6F6] w-[95%] rounded-md border border-[#e2dfdf] min-h-[190px] p-3 outline-none resize-none"
          />
        </div>
        <div className="flex-1 flex flex-col text-[#525252] gap-5">
          <span className='flex items-center justify-between' >
            <h1 className="text-base font-semibold">TRANSCRIPT LOG</h1>
            <button className='text-sm text-blue-500' >View All</button>
          </span>
          <div className="space-y-4">
            {dataTranscript.map((val, index) => (
              <div key={index} className="border-b border-[#D5D5D5] pb-5 flex text-xs">
                <div className="w-[200px] flex flex-col">
                  <span className="font-medium text-[#525252  ]">User {val.userID}</span>
                  <span className="text-gray-500">{val.created}</span>
                </div>
                <p className="flex-1">{val.paragraf}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRANSCRIPT;
