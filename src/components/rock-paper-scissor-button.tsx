import React, { ReactElement } from 'react';

import CircularImageButton from './circular-image-button';

export type RockProps = {
  className?: string;
  type: RockPaperScissors;
  onChoiceClick?: (choice: RockPaperScissors) => void;
};

const RockPaperScissorsButton = ({ type, onChoiceClick, ...rest }: RockProps): ReactElement => {
  let imageSrc = '';
  let borderColor = '';

  switch (type) {
    case 'PAPER':
      imageSrc = '/assets/images/icon-paper.svg';
      borderColor = '#526CF6';
      break;
    case 'SCISSORS':
      imageSrc = '/assets/images/icon-scissors.svg';
      borderColor = '#F3A11D';
      break;
    case 'ROCK':
      imageSrc = '/assets/images/icon-rock.svg';
      borderColor = '#DF3852';
      break;
  }

  return (
    <CircularImageButton
      {...rest}
      imageSrc={imageSrc}
      borderColor={borderColor}
      onClick={() => onChoiceClick && onChoiceClick(type)}
    />
  );
};

export default RockPaperScissorsButton;
