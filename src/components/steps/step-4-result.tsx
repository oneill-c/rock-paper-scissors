import React, { ReactElement } from 'react';
import Button from '../button';

import RockPaperScissorsButton from '../rock-paper-scissor-button';

export interface Step4ResultProps {
  userChoice: RockPaperScissors;
  houseChoice: RockPaperScissors;
  isWin: boolean;
  onPlayAgainClick: () => void;
}

const Step4Result = ({ userChoice, houseChoice, isWin, onPlayAgainClick }: Step4ResultProps): ReactElement => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-12">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl text-white">You Picked</p>
          <RockPaperScissorsButton type={userChoice} />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl text-white">The House Picked</p>
          <RockPaperScissorsButton type={houseChoice} />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 justify-end">
        <h2 className="text-white text-4xl">{isWin ? 'YOU WIN' : 'YOU LOSE'}</h2>
        <Button primary className="text-blue-1 font-semibold text-1xl" onClick={() => onPlayAgainClick()}>
          PLAY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default Step4Result;
