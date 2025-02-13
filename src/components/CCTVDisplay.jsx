import React from 'react';
import { BiExpandAlt, BiVolumeFull, BiFullscreen, BiPlay } from 'react-icons/bi';
import { BsCameraVideoOff } from 'react-icons/bs';

const CCTVDisplay = () => {
  return (
    <div className="size-auto bg-transparent p-6">
      <div className="flex gap-6">
        {/* Main large video display */}
        <div className="w-2/3 relative">
          <div className="bg-[#BBBBBB] aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <BsCameraVideoOff className="w-16 h-16 text-white/50" />
            </div>
            {/* Video controls */}
            <div className="absolute bottom-5 left-0 right-0 bg-black/70 rounded-full py-2 px-4 flex items-center gap-4 mx-4">
              <button className="text-white hover:text-gray-200">
                <BiPlay className="w-5 h-5" />
              </button>
              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full"></div>
              </div>
              <button className="text-white hover:text-gray-200">
                <BiVolumeFull className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-gray-200">
                <BiFullscreen className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right side camera grid */}
        <div className="w-2/3 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((cam) => (
            <div key={cam} className="relative">
              <div className="bg-[#BBBBBB] aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BsCameraVideoOff className="w-8 h-8 text-white/50" />
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <span className="text-white text-sm bg-black/50 px-4 py-1 rounded-md">
                    CAM {cam}
                  </span>
                  <button className="bg-black/60 p-1 rounded-md hover:bg-black/70">
                    <BiExpandAlt className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CCTVDisplay;