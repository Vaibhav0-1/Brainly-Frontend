import { ReactElement } from "react";

export interface ButtonProps{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon: ReactElement;//any
    endIcon: ReactElement;//any
    onClick: ()=>void;
 }

 export  const Button = ()=>{
    return <button> </button>
 }

 <Button variant="primary" size="md" onClick={} text={} startIcon= />