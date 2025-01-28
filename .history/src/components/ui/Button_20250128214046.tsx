import { ReactElement } from "react";

interface ButtonProps{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
 }

 const defaultStyles = "rounded-md"

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",

 }

 const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-4",
    "lg": "py-6",
 }
export const Button = (props: ButtonProps)=>{

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.text}</button>
 }

 <Button variant="primary" size="md" onClick={() => {}} text={"asd"} />