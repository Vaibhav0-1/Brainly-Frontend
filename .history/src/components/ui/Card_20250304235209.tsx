import { ShareIcon } from "../../Icons/ShareIcon";

interface CardProps{
    title: string;
    link: string;
    type:"twitter" | "youtube";
}

export function Card({title, link, type}: CardProps){
    return <div>
        <div className="p-4 bg-white rounded-md shadow-md border-gray-200 max-w-72 border min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon size="sm"/> 
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 flex-1">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500" >
                        <a href={link} 
                        target="_blank"></a>                     
                        <ShareIcon size="sm"/>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon size="sm"/>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-4 ">
                {type === "youtube" && <iframe className="w-full" src={link.replace("youtu.be/", "www.youtube.com/embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}


            </div>
        </div>
    </div>
}
