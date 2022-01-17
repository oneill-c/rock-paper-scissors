import React, { ReactNode, ReactElement } from 'react';
import classnames from 'classnames';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props): ReactElement => {
  const classes = classnames(
    'fixed',
    'font-barlow',
    'w-full',
    'h-full',
    'bg-gradient-radial',
    'from-blue-1',
    'to-blue-2'
  );

  return <div className={classes}>{children}</div>;
};

export default Layout;
