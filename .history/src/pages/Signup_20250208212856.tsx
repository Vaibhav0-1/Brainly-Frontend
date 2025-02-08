import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
import  axios  from "axios"
import { BACKEND_URL } from "../config";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
 
    async function Signup() { 
        const username = usernameRef.current?.value;
        const password = usernameRef.current?.value;
        await axios.post(BACK, {
            data: {
                username,
                password
            }
        })
        alert("You have signed up")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg border min-w-48 p-8">
            <InputBox ref={usernameRef} placeholder="Username"/>
            <InputBox ref={passwordRef} placeholder="Password"/>

            <div className="flex justify-center pt-4 ">
                <Button onClick={Signup} loading={false} variant="primary" size={"sm"} text={"Signup"} fullWidth={true}/>
            </div>


        </div>

    </div> 
}