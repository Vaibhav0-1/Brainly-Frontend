import { Button } from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg border min-w-48 p-8">
            <InputBox placeholder="Username" onChange={function (): void {
                throw new Error("Function not implemented.")
            } }/>
            <InputBox placeholder="Password" onChange={function (): void {
                throw new Error("Function not implemented.")
            } }/>

            <div className="flex justify-center pt-4 ">
                <Button onClick=loading={false} variant="primary" size={"sm"} text={"Signup"} fullWidth={true}/>
            </div>


        </div>

    </div> 
}