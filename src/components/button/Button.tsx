import { FC } from 'react';
import { ButtonProps } from './Button.model';
import { generateClass } from '../../utilities/tailwindClassGenerator';

const classes = {
  initial:
    'text-sm text-white font-medium bg-stone-700 rounded-md px-5 py-2.5 transition-all ease-in',
  focus: 'focus:ring-2 focus:ring-stone-300 focus:outline-none',
  hover: 'hover:bg-stone-600',
};

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  ...restProps
}) => {
  return (
    <button
      type={type}
      className={`${generateClass(classes)} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
