import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
import  axios  from "axios"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
 
    async function Signup() { 
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", 
            {  username, password },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
        alert("You have signed up")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg border min-w-48 p-8">
            <InputBox reference={usernameRef} placeholder="Username"/>
            <InputBox reference={passwordRef} placeholder="Password"/>

            <div className="flex justify-center pt-4 ">
                <Button onClick={Signup} loading={false} variant="primary" size={"sm"} text={"Signup"} fullWidth={true}/>
            </div>


        </div>

    </div> 
}