import { ShareIcon } from "../../Icons/ShareIcon";

export function Card(){
    return <div>
        <div className="p-8 bg-white rounded-md shadow-md border-gray-200 max-w-96 border">
            <div className="flex justify-between">
                <div className="flex item">
                   <ShareIcon size="md"/> 
                    Project ideas
                </div>
                <div className="flex">
                <ShareIcon size="md"/> 
                <ShareIcon size="md"/> 
                </div>
            </div>
        </div>
        

    </div>
}