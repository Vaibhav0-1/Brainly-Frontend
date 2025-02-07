import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 px-8 py-8">
            <InputBox placeholder="Username"/>
            <InputBox placeholder="Password"/>

            <div className="flex items-center">
                <Button  variant="primary" size={"sm"} text={"Signup"}/>
            </div>


        </div>

    </div> 
}