import { generateClass } from '@/utilities/tailwindClassGenerator';
import { Button, ButtonProps } from '../button';

const classes = {
  initial: '!bg-gray-600',
  focus: 'focus:!ring-gray-400',
  hover: 'hover:!bg-gray-500',
};

const SecondaryButton = ({
  children,
  className = '',
  ...restProps
}: ButtonProps) => {
  return (
    <Button className={`${generateClass(classes)} ${className}`} {...restProps}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
