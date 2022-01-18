import React, { ReactNode, ReactElement, useState } from 'react';
import classNames from 'classnames';

import Button from '../components/button';
import Modal from '../components/modal';
import TitleBox from '../components/title-box/title-box';

type Props = {
  score: number;
  children?: ReactNode;
};

const Layout = ({ score, children }: Props): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    return setIsModalOpen(!isModalOpen);
  };

  const classes = classNames(
    'fixed',
    'font-barlow',
    'w-full',
    'h-full',
    'bg-gradient-radial',
    'from-blue-1',
    'to-blue-2'
  );
  const containerClasses = classNames('flex', 'flex-col', 'space-y-14', 'mx-8', 'mt-8', 'md:mx-60', 'justify-center');

  return (
    <div className={classes}>
      <div className={containerClasses}>
        <TitleBox score={score} />
        {children}
        <div className="self-center md:self-end">
          <Button onClick={toggleModal}>Rules</Button>
        </div>
      </div>
      <Modal title="Rules" open={isModalOpen} onClose={toggleModal} center>
        <img className="mx-auto" src="/assets/images/image-rules.svg" height={300} width={300} />
      </Modal>
    </div>
  );
};

export default Layout;
