import { Inpur}
import { CrossIcon } from "../../Icons/CrossIcon";


//controlled Component
export function CreateContentModal({open, onClose}){
    return <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
        <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                    <CrossIcon/>
                </div>
                <div>
                    <Input/>
                </div>
                <div>

                </div>
                hi there
            </span>
        </div>
        
    </div>
}