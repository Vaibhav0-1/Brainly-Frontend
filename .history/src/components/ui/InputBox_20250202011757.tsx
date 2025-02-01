export function Input({onChange}: {onChange: () =}){
    return <div>
        <input type={"text"} className="px-4 py-2" onChange={onChange}></input>
    </div>
}