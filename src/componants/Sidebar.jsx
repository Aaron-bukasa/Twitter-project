import Image from "./fonctionnels/Image";
import twitter from "../assets/icons/Twitter.svg";
import home from "../assets/icons/Home.svg";
import explore from "../assets/icons/Explore.svg";
import notification from "../assets/icons/Notifications.svg";
import messages from "../assets/icons/Messages.svg";
import bookmarks from "../assets/icons/Bookmarks.svg";
import lists from "../assets/icons/Lists.svg";
import profile from "../assets/icons/Profile.svg";
import more from "../assets/icons/More.svg";

const Side = ({imgUrl, imgText, styleClass}) => {
    return (
        <div className={styleClass}>
            <Image imgUrl={imgUrl} />
            <span>{imgText}</span>
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Side imgUrl={twitter} styleClass="menu-btn" />
            <Side imgUrl={home} imgText="Home" styleClass="menu-btn menu-btn-mobile" />
            <Side imgUrl={explore} imgText="Explore" styleClass="menu-btn menu-btn-mobile" />
            <Side imgUrl={notification} imgText="Notifications" styleClass="menu-btn menu-btn-mobile" />
            <Side imgUrl={messages} imgText="Messages" styleClass="menu-btn menu-btn-mobile" />
            <Side imgUrl={bookmarks} imgText="Bookmarks" styleClass="menu-btn" />
            <Side imgUrl={lists} imgText="Lists" styleClass="menu-btn" />
            <Side imgUrl={profile} imgText="Profile" styleClass="menu-btn menu-btn-mobile" />
            <Side imgUrl={more} imgText="More" styleClass="menu-btn" />
            <div className="btn menu-btn" >Tweet</div>
        </div>
    );
}