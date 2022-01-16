import React, { ReactNode, ReactElement } from 'react';

import Menu from '../components/menu';

type Props = {
  children?: ReactNode;
  title?: string;
  pathname: string;
};

const Layout = ({ children, pathname }: Props): ReactElement => {
  return (
    <div>
      <Menu pathname={pathname} />

      {children}
    </div>
  );
};

export default Layout;
