import { TwitterIcon } from "../../Icons/TwitterIcon";
import { YoutubeIcon } from "../../Icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="pt-4">
            <div>
            <SidebarItems text={"Twitter"} icon={<TwitterIcon/>}/>
            </div>
            <div>
            <SidebarItems text={"Youtube"} icon={<YoutubeIcon/>}/>
            </div>
        </div>

    </div>
}