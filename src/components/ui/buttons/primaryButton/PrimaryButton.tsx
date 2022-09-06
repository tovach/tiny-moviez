import { FC, HTMLAttributes, ReactNode } from 'react';

type PrimaryButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  children?: ReactNode;
  className?: string;
};

export const PrimaryButton: FC<PrimaryButtonProps> = ({ icon, children, className, ...props }) => (
  <button
    className={`${
      className || ''
    } flex items-center rounded-xl bg-button-bg p-3 text-xl font-extrabold transition-all hover:bg-secondary`}
    {...props}
  >
    {icon ? <span className='material-icons '>{icon}</span> : null}
    {children}
  </button>
);
