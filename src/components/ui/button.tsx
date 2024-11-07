import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-transparent text-primary-foreground hover:text-[#FFC400] border-transparent underline-animation hover:border-transparent text-xl font-semibold cursor-pointer px-0 px-2"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;