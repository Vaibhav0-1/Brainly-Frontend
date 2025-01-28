import { ReactElement } from "react";

interface ButtonProps{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
 }

 const variableStyles = {
    "primary": "bg-purple-600 text-white",
    "sec": "bg-purple-600 text-white",

 }
 export  const Button = (props: ButtonProps)=>{

    if(props.variant === 'primary'){

    }
    return <button> </button>
 }

 //<Button variant="primary" size="md" onClick={() => {}} text={"asd"} />