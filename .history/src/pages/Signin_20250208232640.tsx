import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
import axios from "axios";
import 


export function Signin(){

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
 
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
            <InputBox placeholder="Username"/>
            <InputBox placeholder="Password"/>

            <div className="flex justify-center pt-4 ">
                <Button loading={false} variant="primary" size={"sm"} text={"Signin"} fullWidth={true}/>
            </div>


        </div>

    </div> 
}