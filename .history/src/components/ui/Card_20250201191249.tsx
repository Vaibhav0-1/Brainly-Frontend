import { ShareIcon } from "../../Icons/ShareIcon";

export function Card(){
    return <div>
        <div className="p-4 bg-white rounded-md shadow-md border-gray-200 max-w- border">
            <div className="flex justify-between">
                <div className="flex items-center ">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon size="md"/> 
                    </div>
                    Project ideas
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500" >
                        <ShareIcon size="md"/>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon size="md"/>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
}