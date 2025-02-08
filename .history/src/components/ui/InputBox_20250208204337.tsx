export function InputBox({ placeholder}: {placeholder: string; ref: any}){
    return <div>
        <input ref={refplaceholder={placeholder} type={"text"} className="px-4 py-2 border rounded  shadow-md m-1"></input>
    </div>
}