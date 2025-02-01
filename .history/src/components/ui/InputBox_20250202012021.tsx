export function InputBox({onChange, placeholder}: {onChange: () => void}){
    return <div>
        <input placeholdertype={"text"} className="px-4 py-2" onChange={onChange}></input>
    </div>
}