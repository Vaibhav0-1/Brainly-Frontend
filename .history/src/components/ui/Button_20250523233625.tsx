import React, { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "small" | "medium" | "large";
  text?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode; // fallback for children
}

const baseClasses =
  "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantClasses = {
  primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
  secondary:
    "bg-white hover:bg-gray-50 text-indigo-600 border border-gray-200 hover:border-gray-300 focus:ring-indigo-500",
  outline:
    "bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/50 focus:ring-white",
  white: "bg-white hover:bg-gray-100 text-indigo-600 focus:ring-indigo-500",
};

const sizeClasses = {
  small: "text-sm px-3 py-1.5",
  medium: "text-sm px-4 py-2",
  large: "text-base px-6 py-3",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  text,
  children,
  startIcon,
  endIcon,
  loading = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? "w-full justify-center" : ""
  } ${loading ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  return (
    <button className={classes} disabled={loading} {...props}>
      {startIcon && <span className="pr-2">{startIcon}</span>}
      {text || children}
      {endIcon && <span className="pl-2">{endIcon}</span>}
    </button>
  );
};
