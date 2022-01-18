import classNames from 'classnames';
import React, { HTMLProps, ReactElement } from 'react';
import ScoreBox from './score-box';

export type TitleBoxProps = { score: number } & HTMLProps<HTMLDivElement>;

const TitleBox = ({ score, className }: TitleBoxProps): ReactElement => {
  const classes = classNames(
    'flex',
    'justify-between',
    'items-center',
    'border',
    'rounded-lg',
    'p-8',
    'text-white',
    className
  );

  return (
    <div className={classes}>
      <img src="/assets/images/logo.svg" />
      <ScoreBox score={score} />
    </div>
  );
};

export default TitleBox;
