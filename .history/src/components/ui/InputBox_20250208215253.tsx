interface InputProps{
    placeholder: string;
    reference?: any
}

export function InputBox({ placeholder, ref}: InputProps){
    return <div>
        <input ref={ref} placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded  shadow-md m-1"></input>
    </div>
}