import { ReactElement } from "react"

export function SidebarItems({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return <div className="flex items-center gap-2 p-3">
        <div>
            
        </div>
    {icon}
    <span>{text}</span>
</div>
}