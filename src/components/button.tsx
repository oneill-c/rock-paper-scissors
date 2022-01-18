import classNames from 'classnames';
import React, { HTMLProps, ReactElement } from 'react';

export type ButtonProps = { primary?: boolean } & HTMLProps<HTMLButtonElement>;
const Button = ({ primary, className, ...rest }: ButtonProps): ReactElement => {
  const classes = classNames(
    'border',
    'border-white',
    'px-8',
    'py-2',
    'rounded-lg',
    { 'bg-transparent text-white': !primary },
    { 'bg-white text-black': primary },
    className
  );
  return <button {...rest} type="button" className={classes} />;
};

export default Button;
