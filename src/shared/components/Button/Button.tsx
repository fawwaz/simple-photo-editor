import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  icon?: ReactNode;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center shadow"
      onClick={props.onClick}
    >
      {props.icon}
      {props.children}
    </button>
  );
}
