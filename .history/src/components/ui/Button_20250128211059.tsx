import { ReactElement } from "react";

interface ButtonProps{
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: ReactEle;
    endIcon?: ReactElement;
    onClick: () => void;
 }

 export const Button

 export  const Button = (props: ButtonProps)=>{
    return <button> </button>
 }

 //<Button variant="primary" size="md" onClick={() => {}} text={"asd"} />