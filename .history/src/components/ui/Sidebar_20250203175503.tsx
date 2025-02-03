import { TwitterIcon } from "../../Icons/TwitterIcon";
import { SidebarItems } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="pt-4">
            <SidebarItems text={""} icon={TwitterIcon}/>
        </div>

    </div>
}