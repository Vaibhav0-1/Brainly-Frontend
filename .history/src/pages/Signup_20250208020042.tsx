import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 px-4">
            <InputBox placeholder="Username"/>
            <InputBox placeholder="Password"/>

            <Button variant="primary" size={"sm"} text={"Signup"}/>


        </div>

    </div> 
}