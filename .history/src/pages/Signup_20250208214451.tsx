import { useRef, useState } from "react"
import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
import axios from "axios"
import { BACKEND_URL } from "../config";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
 
    async function handleSignup() { 
        try {
            setLoading(true);
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value; // Fixed: was using usernameRef

            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });

            if (response.status === 200 || response.status === 201) {
                alert("Signup successful!");
            }
        } catch (error: any) {
            console.error("Signup error:", error);
            alert(error.response?.data?.message || "Failed to sign up");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-lg border min-w-48 p-8">
                <InputBox ref={usernameRef} placeholder="Username" />
                <InputBox ref={passwordRef} placeholder="Password"/>

                <div className="flex justify-center pt-4">
                    <Button 
                        onClick={handleSignup} 
                        loading={loading} 
                        variant="primary" 
                        size="sm" 
                        text="Signup" 
                        fullWidth={true}
                    />
                </div>
            </div>
        </div> 
    )
}