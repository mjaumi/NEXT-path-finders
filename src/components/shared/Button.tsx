import React from 'react';

interface IButton {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  additionalClassNames?: string;
}

const Button = ({ type, children, onClick, additionalClassNames }: IButton) => {
  // rendering generic button component here
  return (
    <button
      onClick={onClick}
      type={type}
      className={`font-medium bg-primary-blue text-primary-white px-5 py-2 rounded-lg hover:opacity-60 duration-300 ${additionalClassNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
