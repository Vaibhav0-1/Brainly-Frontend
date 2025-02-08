interface InputProps{
    placeholder: string;
     ref?: any
}

export function InputBox({ placeholder, ref}: InputProps){
    return <div>
        <input refere={ref} placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded  shadow-md m-1"></input>
    </div>
}