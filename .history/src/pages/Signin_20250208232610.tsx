import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"



export function Signin(){

    
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg border min-w-48 p-8">
            <InputBox placeholder="Username"/>
            <InputBox placeholder="Password"/>

            <div className="flex justify-center pt-4 ">
                <Button loading={false} variant="primary" size={"sm"} text={"Signin"} fullWidth={true}/>
            </div>


        </div>

    </div> 
}