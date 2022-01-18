import classNames from 'classnames';
import React, { ReactElement } from 'react';

export interface ScoreBoxProps {
  score: number;
}
const ScoreBox = ({ score }: ScoreBoxProps): ReactElement => {
  const classes = classNames('flex', 'flex-col', 'items-center', 'bg-white', 'rounded', 'w-20', 'h-20', 'p-2');

  return (
    <div className={classes}>
      <p className="text-blue-700">Score</p>
      <h3 className="text-black text-4xl font-semibold">{score}</h3>
    </div>
  );
};

export default ScoreBox;
