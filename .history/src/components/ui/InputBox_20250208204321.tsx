export function InputBox({ placeholder}: {placeholder: string; ref: }){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded  shadow-md m-1"></input>
    </div>
}