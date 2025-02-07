import { ReactElement } from "react"

export function SidebarItems({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return <div className="flex  text-gray-700 gap-2 py-2">
        <div className="pr-2 rounded-full ">
        {icon}
        </div>
        <span className="">
            {text}
        </span>
</div>
}