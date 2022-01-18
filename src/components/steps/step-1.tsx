import React, { ReactElement } from 'react';

import RockPaperScissorsButton from '../rock-paper-scissor-button';

export interface Step1Props {
  onChoiceClick: (choice: RockPaperScissors) => void;
}

const Step1 = ({ onChoiceClick }: Step1Props): ReactElement => {
  return (
    <div className="self-center" style={{ minWidth: '32rem' }}>
      <div
        className="relative mt-24 mx-auto w-full h-72"
        // eslint-disable-next-line quotes
        style={{ backgroundImage: "url('/assets/images/bg-triangle.svg')", backgroundRepeat: 'no-repeat' }}
      >
        <RockPaperScissorsButton type="PAPER" className="absolute -left-24 -top-20" onChoiceClick={onChoiceClick} />
        <RockPaperScissorsButton type="SCISSORS" className="absolute -top-20 right-24" onChoiceClick={onChoiceClick} />
        <RockPaperScissorsButton type="ROCK" className="absolute -bottom-20 ml-16" onChoiceClick={onChoiceClick} />
      </div>
    </div>
  );
};

export default Step1;
