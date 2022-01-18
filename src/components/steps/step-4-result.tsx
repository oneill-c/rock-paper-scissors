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
    <div className="flex justify-center space-x-12">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl text-white">You Picked</p>
        <RockPaperScissorsButton type={userChoice} />
      </div>
      <div className="flex flex-col items-center space-y-4 justify-end">
        <h2 className="text-white text-3xl">{isWin ? 'You Win' : 'You Lose'}</h2>
        <Button primary onClick={() => onPlayAgainClick()}>
          Play Again
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl text-white">The House Picked</p>
        <RockPaperScissorsButton type={houseChoice} />
      </div>
    </div>
  );
};

export default Step4Result;
