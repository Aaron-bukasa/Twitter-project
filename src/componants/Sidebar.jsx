import iconTwitter from "../assets/icons/Twitter.svg";
import iconHome from "../assets/icons/Home.svg";
import iconExplore from "../assets/icons/Explore.svg";
import iconNotification from "../assets/icons/Notifications.svg";
import iconMessages from "../assets/icons/Messages.svg";
import iconBookmarks from "../assets/icons/Bookmarks.svg";
import iconLists from "../assets/icons/Lists.svg";
import iconProfile from "../assets/icons/Profile.svg";
import iconMore from "../assets/icons/More.svg";
import Side from "./fonctionnels/Side";
import iconMore2 from "../assets/icons/More-2.svg";
import Image from "./fonctionnels/Image";
import { createPortal } from "react-dom";
import ImgProfile from "./fonctionnels/ImgProfile";

export default function Sidebar() {
    return (
        <div className="flex-shrink-0 xl:min-w-64 sidebar">
            <div className="flex justify-between sm:flex-col nav">
                <div className="hidden sm:block">
                    <Side link="" imgUrl={iconTwitter} styleClass="hover:bg-[#181818]" />
                </div>
                <div>
                    <Side link="" imgUrl={iconHome} txt="Home" styleClass="hover:bg-[#181818]" />
                </div>
                <div>
                    <Side link="explore" imgUrl={iconExplore} txt="Explore" styleClass="hover:bg-[#181818]" />
                </div>
                <div>
                    <Side link="notifications" imgUrl={iconNotification} txt="Notifications" styleClass="hover:bg-[#181818]" /> 
                </div>
                <div>
                    <Side link="messages" imgUrl={iconMessages} txt="Messages" styleClass="hover:bg-[#181818]" />
                </div>
                <div>
                    <Side link="bookmarks" imgUrl={iconBookmarks} txt="Bookmarks" styleClass="hover:bg-[#181818]" />
                </div>
                <div className="hidden sm:block">
                    <Side link="lists" imgUrl={iconLists} txt="Lists" styleClass="hhover:bg-[#181818]" />
                </div>
                <div>
                    <Side link="bukasa_mba" imgUrl={iconProfile} txt="Profile" styleClass="hover:bg-[#181818]" />
                </div>
                <div className="hidden sm:block">
                    <Side link="more" imgUrl={iconMore} txt="More" styleClass="hover:bg-[#181818]" />
                </div>
                <div className="hidden sm:block bg-blue-500 text-center py-3.5 rounded-full hover:opacity-80 hover:cursor-pointer">Tweet</div>
                <ModaleAddTweet />
            </div>
            <div className="flex items-center gap-x-4 mb-4 p-3 rounded-2xl max-w-64 login-out hover:bg-[#181818] hover:cursor-pointer">
                <ImgProfile size={70} />
                <div className="w-full justify-between sm:hidden xl:flex">
                    <div className="text-sm">
                        <p>Ardev</p>
                        <p className="text-gray-500">@bukasa_mba</p>
                    </div>
                    <Image imgUrl={iconMore2} altImg="icon more"/>
                </div>
            </div>
        </div> 
    );
}

function ModaleAddTweet() {
    return createPortal(
        <div className="fixed bottom-24 right-8 bg-blue-500 p-4 rounded-full sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>, document.body)
}