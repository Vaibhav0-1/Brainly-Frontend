import { ShareIcon } from "../../Icons/ShareIcon";

export function Card(){
    return <div>
        <div className="p-4 bg-white rounded-md shadow-md border-gray-200 max-w-72 border">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XbLMw9icUkg?si=J0rcd3pF33wCOu86" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
}