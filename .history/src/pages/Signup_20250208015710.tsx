import { InputBox } from "../components/ui/InputBox"
export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <InputBox placeholder="Username" onChange={function (): void} />

        </div>

    </div> 
}