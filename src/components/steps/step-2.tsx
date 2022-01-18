import React, { ReactElement } from 'react';

import RockPaperScissorsButton from '../rock-paper-scissor-button';

export interface Step2Props {
  userChoice: RockPaperScissors;
}

const Step2 = ({ userChoice }: Step2Props): ReactElement => {
  return (
    <div className="flex justify-center space-x-12">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl text-white">You Picked</p>
        <RockPaperScissorsButton type={userChoice} />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl text-white">The House Picked</p>
        <div className="bg-black rounded-full w-32 h-32 opacity-20"></div>
      </div>
    </div>
  );
};

export default Step2;
