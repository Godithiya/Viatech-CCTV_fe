import React from 'react';

const TRANSCRIPT = () => {
  const data = [
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
    <div className="w-full flex p-5 h-full">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-lg font-semibold">TRANSCRIPT TEXT</h1>
        <textarea
          name="transcriptText"
          id="transcriptText"
          className="bg-[#F6F6F6] w-[95%] rounded-md border border-[#e2dfdf] min-h-[220px] p-3 outline-none resize-none"
        />
      </div>
      <div className="flex-1 flex flex-col text-[#525252] gap-5">
        <h1 className="text-lg font-semibold">TRANSCRIPT LOG</h1>
        <div className="space-y-5">
          {data.map((val, index) => (
            <div key={index} className="border-b border-[#D5D5D5] pb-5 flex text-sm">
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
  );
};

export default TRANSCRIPT;
