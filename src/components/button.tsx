import classNames from 'classnames';
import React, { HTMLProps, ReactElement } from 'react';

const Button = ({ className, ...rest }: HTMLProps<HTMLButtonElement>): ReactElement => {
  const classes = classNames(
    'bg-transparent',
    'border',
    'border-white',
    'text-white',
    'px-8',
    'py-2',
    'rounded-lg',
    className
  );
  return <button {...rest} type="button" className={classes} />;
};

export default Button;
