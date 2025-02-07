import { ReactElement } from "react"

export function SidebarItems({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return <div className="flex  text-gray-700 gap-2 p-3">
        <div className="p-2 bg-gray-200 rounded-full">
        {icon}
        </div>
    <span className="p-2 text-gray-700">{text}</span>
</div>
}