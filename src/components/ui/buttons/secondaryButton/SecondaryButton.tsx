import { FC, HTMLAttributes, ReactNode } from 'react';

type SecondaryButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  children: ReactNode;
  className?: string;
};

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  icon,
  children,
  className,
  ...props
}) => (
  <button
    className={`${className} flex items-center gap-2 rounded-xl bg-secondary px-5 py-2 text-xl font-extrabold text-bg1 transition-all hover:bg-bg2 hover:text-primary`}
  >
    {icon ? (
      <span className='material-icons' {...props}>
        {icon}
      </span>
    ) : null}
    {children}
  </button>
);
