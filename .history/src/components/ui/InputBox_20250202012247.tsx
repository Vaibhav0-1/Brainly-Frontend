export function InputBox({onChange, placeholder}: {onChange: () => void}){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded justshadow-md" onChange={onChange}></input>
    </div>
}