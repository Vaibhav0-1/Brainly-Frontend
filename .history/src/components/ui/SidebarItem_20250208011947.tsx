import { ReactElement } from "react"

export function SidebarItems({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return <div className="flex  text-gray-700 gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded max-w-52">
        <div className="pr-2">
        {icon}
        </div>
        <span className="pr-2">
            {text}
        </span>
</div>
}