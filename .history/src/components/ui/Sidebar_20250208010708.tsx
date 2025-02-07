import { TwitterIcon } from "../../Icons/TwitterIcon";
import { YoutubeIcon } from "../../Icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItem";
import { Logo } from "../../Icons/Logo";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4">
        <div className="pt-4">
            {/* Logo Header Section */}
            <div className="flex items-center mb-8">
                <div className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                    <div className="text-purple-600">
                        <Logo />
                    </div>
                    <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                        Brainly
                    </span>
                </div>
            </div>
            
            <SidebarItems text={"Twitter"} icon={<TwitterIcon/>}/>
            <SidebarItems text={"Youtube"} icon={<YoutubeIcon/>}/>
        </div>
    </div>
}