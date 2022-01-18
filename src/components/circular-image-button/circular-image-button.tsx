import classNames from 'classnames';
import React, { HTMLProps } from 'react';

export type CIBProps = { imageSrc: string; borderColor: string } & HTMLProps<HTMLButtonElement>;

const CircularImageButton = ({ className, imageSrc, borderColor, onClick }: CIBProps) => {
  const classes = classNames('bg-white', 'rounded-full', 'p-8', className);

  return (
    <button className={classes} style={{ borderWidth: '22px', borderColor }} onClick={onClick}>
      <img src={imageSrc} />
    </button>
  );
};

export default CircularImageButton;
