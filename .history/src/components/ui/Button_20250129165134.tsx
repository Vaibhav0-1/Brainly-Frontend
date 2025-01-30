import { ReactElement } from "react";

interface ButtonProps{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
 }

const defaultStyles = "rounded-md flex"

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",

 }

 const sizeStyles = {
    "sm": "py-1 px-2 text-sm rounded-xl",
    "md": "py-2 px-4 text-md rounded-md",
    "lg": "py-4 px-8 text-lg rounded-xl",
 }
export const Button = (props: ButtonProps)=>{

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}</button>
 }

 <Button variant="primary" size="md" onClick={() => {}} text={"asd"} />