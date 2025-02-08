import { ShareIcon } from "../../Icons/ShareIcon";

interface CardProps{
    title: string;
    link: string;
    type:"twitter" | "youtube";
}

export function Card({title, link, type}: CardProps){
    return <div>
        <div className="p-4 bg-white rounded-md shadow-md border-gray-200 max-w-72 border min-h-48">
            <div className="flex justify-between items-center mb-4"> {/* Added mb-4 for spacing */}
                <div className="flex-1"> {/* Added flex-1 to take available space */}
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3> {/* Proper heading styling */}
                </div>
                <div className="flex items-center gap-2"> {/* Added gap-2 for icon spacing */}
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <ShareIcon size="md"/>
                    </a>
                </div>
            </div>
            
            <div className="pt-4 pb-4">
                {/* ...existing iframe and blockquote code... */}
            </div>
        </div>
    </div>
}