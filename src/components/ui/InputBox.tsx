export function InputBox({onChange, placeholder}: {onChange: () => void, placeholder: string}){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded  shadow-md m-1" onChange={onChange}></input>
    </div>
}