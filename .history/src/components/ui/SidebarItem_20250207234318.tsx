import { ReactElement } from "react"

export function SidebarItems({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return <div className="flex items-center gap-2 p-3">
        <div cl>
        {icon}
        </div>
    <span>{text}</span>
</div>
}