import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  loading = false,
  startIcon,
  endIcon,
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses: Record<string, string> = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-white hover:bg-gray-50 text-indigo-600 border border-gray-200 hover:border-gray-300 focus:ring-indigo-500',
    outline: 'bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/50 focus:ring-white',
    white: 'bg-white hover:bg-gray-100 text-indigo-600 focus:ring-indigo-500',
  };

  const sizeClasses: Record<string, string> = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-sm px-4 py-2',
    large: 'text-base px-6 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {startIcon && <span className="mr-2 flex items-center">{startIcon}</span>}
      {loading ? 'Loading...' : children}
      {endIcon && <span className="ml-2 flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
