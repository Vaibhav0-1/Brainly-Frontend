import { ReactElement } from "react";

interface ButtonProps{
    variant: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
 }

 const defaultStyles = "rounded-md p-4 text-lg"

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600",

 }

 const sizeStyles = {
    "sm": "",
    "md": "text-md",
    "lg": "text-lg",
 }
export  const Button = (props: ButtonProps)=>{

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles}`}>{props.text}</button>
 }

 //<Button variant="primary" size="md" onClick={() => {}} text={"asd"} />