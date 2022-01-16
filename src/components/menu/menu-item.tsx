import Link from 'next/link';
import React, { ReactElement, FormEvent } from 'react';

export interface Props {
  id: string;
  text: string;
  icon?: ReactElement;
  navigateTo: string;
  active?: boolean;
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
}

const MenuItem = ({ text, icon, navigateTo, onClick }: Props): ReactElement => {
  return (
    <div className="py-2 text-sm">
      <Link href={navigateTo}>
        <button onClick={onClick}>
          <span>{icon}</span>
          <span>{text}</span>
        </button>
      </Link>
    </div>
  );
};
export default MenuItem;
