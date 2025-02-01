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
            <div className="pt-4 pb-4 ">
            {/* <iframe className="w-full" src="https://www.youtube.com/embed/XbLMw9icUkg?si=J0rcd3pF33wCOu86" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

            <blockquote className="twitter-tweet">
  <a href="https://twitter.com/username/status/807811447862468608"></a> 
</blockquote>
            </div>
        </div>
    </div>
}