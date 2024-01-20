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
import Avatar from "./fonctionnels/Avatar";
import imgProfile from "../assets/profil_full.png";
import iconMore2 from "../assets/icons/More-2.svg";
import Image from "./fonctionnels/Image";
import { createPortal } from "react-dom";

export default function Sidebar() {
    return (
        <div className="flex-shrink-0 sidebar">
            <div className="sidebar-menu">
                <Side link="" imgUrl={iconTwitter} />
                <Side link="" imgUrl={iconHome} txt="Home" />
                <Side link="explore" imgUrl={iconExplore} txt="Explore" />
                <Side link="notifications" imgUrl={iconNotification} txt="Notifications" />
                <Side link="messages" imgUrl={iconMessages} txt="Messages" />
                <Side link="bookmarks" imgUrl={iconBookmarks} txt="Bookmarks" />
                <Side link="lists" imgUrl={iconLists} txt="Lists" />
                <Side link="profile" imgUrl={iconProfile} txt="Profile" />
                <Side link="more" imgUrl={iconMore} txt="More" />
                <div className="btn tweet">Tweet</div>
                <ModaleAddTweet />
            </div>
            <div className="flex items-center gap-x-4 mb-4 login-out">
                <Avatar avatarUrl={imgProfile} />
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