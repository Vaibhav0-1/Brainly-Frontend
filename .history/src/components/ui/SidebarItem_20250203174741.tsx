import { ReactElement } from "react"

export function SidebarItems({text, icon}: {
    text: string;
    icon: ReactElement;
}){
    return <div>
        {icon}
    </div>
}