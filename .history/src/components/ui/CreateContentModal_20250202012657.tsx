import { InputBox } from "../ui/InputBox";
import { CrossIcon } from "../../Icons/CrossIcon";
import { Button } from "./Button";


//controlled Component
export function CreateContentModal({open, onClose}){
    return <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
        <div className="flex flex-col justify-center shadow-md rounded">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                    <CrossIcon/>
                </div>
                <div>
                    <InputBox placeholder= {"Title"}/>
                    <InputBox placeholder= {"Link"}/>
                </div>
                <Button variant="primary" size="md" text="Submit" onClick={onClose}/>
                    Submit
                <div>

                </div>
                
            </span>
        </div>
        
    </div>
}