import classNames from 'classnames';
import React, { HTMLProps, ReactElement } from 'react';

export type CIBProps = { imageSrc: string; borderColor: string } & HTMLProps<HTMLButtonElement>;

const CircularImageButton = ({ className, imageSrc, borderColor, onClick }: CIBProps): ReactElement => {
  const classes = classNames('bg-white', 'rounded-full', 'p-6', className);

  return (
    <button className={classes} style={{ borderWidth: '16px', borderColor }} onClick={onClick}>
      <img src={imageSrc} />
    </button>
  );
};

export default CircularImageButton;
