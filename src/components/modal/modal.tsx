import React, { ReactElement, ReactNode } from 'react';
import cn from 'classnames';
import ReactResponsiveModal, { ModalProps } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import CloseIcon from './close-icon';

export type MProps = ModalProps & {
  children: ReactNode;
  title: string;
};

const Modal = ({ classNames, children, title, ...rest }: MProps): ReactElement => {
  const overlay = cn('top-0', 'bottom-0', 'left-0', 'right-0', 'bg-black', 'bg-opacity-50', classNames?.overlay);
  const modal = cn(
    'fixed',
    'bg-white',
    'overflow-auto',
    'w-full',
    'h-screen',
    'md:h-auto',
    'border',
    'm-0',
    'text-gray-700',
    'shadow',
    'md:rounded-lg',
    classNames?.modal
  );
  const closeButton = cn('absolute', 'bottom-6', 'md:right-6', 'md:top-6', 'cursor-pointer');
  const titleBoxClasses = 'p-6 bg-white';

  return (
    <ReactResponsiveModal
      {...rest}
      classNames={{ modal, overlay, closeButton }}
      closeIcon={<CloseIcon />}
      styles={{ modal: { minWidth: '30rem', margin: 0 } }}
    >
      <div className="flex flex-col">
        <div className={titleBoxClasses}>
          <h2 className="font-bold text-lg capitalize">{title}</h2>
        </div>
        <div className="px-6 py-8 text-gray-500">{children}</div>
      </div>
    </ReactResponsiveModal>
  );
};

export default Modal;
