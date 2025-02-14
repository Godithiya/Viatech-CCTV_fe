import React, { useState } from 'react';
import { AiFillAudio, AiOutlineAudio } from 'react-icons/ai';
import ButtonAudioAction from './ButtonAudioAction';

const TRANSCRIPT = () => {
  // Menggabungkan state terkait ke dalam satu objek
  const [audioState, setAudioState] = useState({
    isTalking: false,
    activePreset: null,
    isTranscribing: false
  });

  const dataButtonAudioAction = [
    { title: 'P1', dec: 'Preset audio 1' },
    { title: 'P2', dec: 'Preset audio 2' },
    { title: 'P3', dec: 'Preset audio 3' },
    { title: 'P4', dec: 'Preset audio 4' },
  ];

  const dataTranscript = [
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
    {
      userID: '1090',
      created: '12:42 10/02/2024',
      paragraf: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim',
    },
  ];

  // Handler yang lebih terstruktur
  const handleTalkButton = () => {
    setAudioState(prev => ({
      ...prev,
      isTalking: !prev.isTalking
    }));
  };

  const handlePresetSelect = (presetTitle) => {
    setAudioState(prev => {
      const newActivePreset = prev.activePreset === presetTitle ? null : presetTitle;
      console.log("Active Preset:", newActivePreset);
      return {
        ...prev,
        activePreset: newActivePreset
      };
    });
  };
  

  const handleTranscribe = () => {
    setAudioState(prev => ({
      ...prev,
      isTranscribing: !prev.isTranscribing
    }));

    setTimeout(() => {
      setAudioState((val) => val.isTranscribing)
    }, 1000)
  };

  return (
    <div className='w-full flex overflow-hidden flex-col gap-5 '>
      <div className='flex h-[200px] gap-3 border-b pb-3 border-[#e2dfdf] flex-1'>
        <div className='flex items-center flex-col flex-1'>
          <div className='w-full flex items-center gap-2'>
            <span className='w-full bg-[#D5D5D5] h-[1px] block' />
            <h1 className='w-[250px] text-center text-sm'>AUDIO ACTION</h1>
            <span className='w-full bg-[#D5D5D5] h-[1px] block' />
          </div>
          <div className='flex gap-5 p-5 flex-wrap justify-center w-full'>
            {dataButtonAudioAction.map((preset) => (
              <ButtonAudioAction 
                key={preset.title}
                onClick={() => handlePresetSelect(preset.title)}
                active={audioState.activePreset === preset.title}
                desc={preset.dec}
                title={preset.title}
              />
            ))}
          </div>
        </div>
        
        <div className='flex items-center  gap-1 flex-1'>
          <div 
            onClick={handleTalkButton}
            className={`w-full select-none transition-all duration-200 h-[130px] rounded-md text-white text-xl 
              ${audioState.isTalking ? 'scale-95 drop-shadow-2xl' : 'bg-[#d2452f] drop-shadow-xl'}`}
          >
            <span className='w-full flex justify-center flex-col gap-2 items-center h-[120px] rounded-md text-white text-xl bg-[#FF391F] transition-all duration-200'>
              {audioState.isTalking ? <AiFillAudio size={35} /> : <AiOutlineAudio size={35} />}
              HOLD TO TALK
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 flex">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-base font-semibold">TRANSCRIPT TEXT</h1>
          <div className='space-y-5' >
            <textarea
              name="transcriptText"
              id="transcriptText"
              className="bg-[#F6F6F6] w-[95%] rounded-md border border-[#e2dfdf] min-h-[250px] p-3 outline-none resize-none"
            />
            <button
              onClick={handleTranscribe}
              className={`w-[95%] h-[50px] text-xl rounded-md text-white transition-all duration-200 
                ${audioState.isTranscribing ? 'scale-95 drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)] bg-blue-600' : 'bg-blue-500 drop-shadow-[0_6px_15px_rgba(0,0,0,0.4)]'}
              `}
            >
              Play
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col text-[#525252] gap-5">
          <span className='flex items-center justify-between'>
            <h1 className="text-base font-semibold">TRANSCRIPT LOG</h1>
            <button className='text-sm text-blue-500'>View All</button>
          </span>
          <div className="space-y-4">
            {dataTranscript.map((entry, index) => (
              <div key={index} className="border-b border-[#D5D5D5] pb-5 flex text-xs">
                <div className="w-[200px] flex flex-col">
                  <span className="font-medium text-[#525252]">User {entry.userID}</span>
                  <span className="text-gray-500">{entry.created}</span>
                </div>
                <p className="flex-1">{entry.paragraf}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRANSCRIPT;