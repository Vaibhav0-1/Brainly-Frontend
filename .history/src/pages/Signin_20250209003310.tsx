import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function Signin(){

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
 
    async function signin() { 
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response =  await axios.post(BACKEND_URL + "/api/v1/signin", 
            {  username, password },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate()
        alert("You have been signed in")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg border min-w-48 p-8">
            <InputBox reference={usernameRef} placeholder="Username"/>
            <InputBox reference={passwordRef} placeholder="Password"/>

            <div className="flex justify-center pt-4 ">
                <Button onClick={signin} loading={false} variant="primary" size={"sm"} text={"Signin"} fullWidth={true}/>
            </div>


        </div>

    </div> 
}