import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg border min-w-48 px-8 py-8">
            <InputBox placeholder="Username"/>
            <InputBox placeholder="Password"/>

            <div className="flex justify-center pt-4 shadow-fuchsia-300">
                <Button variant="primary" size={"sm"} text={"Signup"}/>
            </div>


        </div>

    </div> 
}