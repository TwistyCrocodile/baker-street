import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
};

const variants = {
  primary: 'bg-baker-primary text-white hover:bg-baker-dark focus-visible:outline-baker-primary',
  secondary:
    'border border-baker-primary/30 bg-baker-cream text-baker-dark hover:border-baker-primary hover:bg-white focus-visible:outline-baker-primary',
  light:
    'border border-white/35 bg-white/12 text-white backdrop-blur-md hover:bg-white hover:text-baker-dark focus-visible:outline-white',
};

export function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  const classes = [
    'inline-flex min-h-14 w-full items-center justify-center rounded-full px-7 text-center text-sm font-bold uppercase tracking-[0.12em] shadow-soft transition duration-300',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
    'sm:w-auto',
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
