import { ReactElement } from "react";

interface ButtonProps{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
 }

const defaultStyles = "px-4 py-2 rounded-md font-light flex  items-center"

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600",

 }

 const sizeStyles = {
    "sm": "py-1 px-2 text-sm rounded-sm",
    "md": "py-2 px-4 text-md rounded-md",
    "lg": "py-4 px-8 text-lg rounded-xl",
 }
export function Button(props: ButtonProps){

   return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? "w-full flex justify-center" : ""} ${props.loading ? "disabled:"}`}>
   {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
   {props.text}
   {props.endIcon}
   </button>
}

 <Button variant="primary" size="md" onClick={() => {}} text={""} />