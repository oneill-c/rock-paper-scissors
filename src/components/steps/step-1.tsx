import React, { ReactElement } from 'react';

import RockPaperScissorsButton from '../rock-paper-scissor-button';

export interface Step1Props {
  onChoiceClick: (choice: RockPaperScissors) => void;
}

const Step1 = ({ onChoiceClick }: Step1Props): ReactElement => {
  return (
    <div className="self-center mx-auto">
      <div
        className="relative"
        style={{
          // eslint-disable-next-line quotes
          backgroundImage: "url('/assets/images/bg-triangle.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '16rem',
          height: '14rem',
        }}
      >
        <RockPaperScissorsButton type="PAPER" className="absolute -left-14 -top-20" onChoiceClick={onChoiceClick} />
        <RockPaperScissorsButton type="SCISSORS" className="absolute -top-20 -right-12" onChoiceClick={onChoiceClick} />
        <RockPaperScissorsButton type="ROCK" className="absolute -bottom-16 ml-16" onChoiceClick={onChoiceClick} />
      </div>
    </div>
  );
};

export default Step1;
