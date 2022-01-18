import React, { ReactElement } from 'react';
import RockPaperScissorsButton from '../rock-paper-scissor-button';

export interface Step3Props {
  userChoice: RockPaperScissors;
  houseChoice: RockPaperScissors;
}

const Step3 = ({ userChoice, houseChoice }: Step3Props): ReactElement => {
  return (
    <div className="flex justify-center space-x-12">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl text-white">You Picked</p>
        <RockPaperScissorsButton type={userChoice} />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl text-white">The House Picked</p>
        <RockPaperScissorsButton type={houseChoice} />
      </div>
    </div>
  );
};

export default Step3;
