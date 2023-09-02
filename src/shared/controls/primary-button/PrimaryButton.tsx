import { generateClass } from '@/utilities/tailwindClassGenerator';
import { Button, ButtonProps } from '../button';

const classes = {
  initial: '!bg-blue-600',
  focus: 'focus:!ring-blue-400',
  hover: 'hover:!bg-blue-500',
};

const PrimaryButton = ({
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

export default PrimaryButton;
