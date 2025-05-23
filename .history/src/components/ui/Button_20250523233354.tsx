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
  // classes same as before
  // disable button if loading or disabled

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {loading ? 'Loading...' : children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};
