import { TwitterIcon } from "../../Icons/TwitterIcon";
import { YoutubeIcon } from "../../Icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItem";
import { Logo } from "../../Icons/Logo";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0  pl-4">
        <div className="pt-4">
            <div className="flex text-2xl font-bold items-center gap-2 ">
                <div className="pr-2 text-purple-700 ">
                {<Logo/>}
                </div>
                <span> Brainly </span>
            </div>
            
            <SidebarItems text={"Twitter"} icon={<TwitterIcon/>}/>
            <SidebarItems text={"Youtube"} icon={<YoutubeIcon/>}/>    
        </div>
    </div>
}