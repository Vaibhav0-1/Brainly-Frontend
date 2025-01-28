import { ReactElement } from "react";

export interface ButtonProps{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon: ReactElement;//any
 }

 export  const Button = ()=>{
    return <button> </button>
 }

 <Button variant="primary" />