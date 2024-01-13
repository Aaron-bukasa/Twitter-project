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
        <div className='menu-btns'>
            <Image imgUrl={imgUrl} />
            <span>{imgText}</span>
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Side imgUrl={twitter} />
            <Side imgUrl={home} imgText="Home" />
            <Side imgUrl={explore} imgText="Explore" />
            <Side imgUrl={notification} imgText="Notifications" />
            <Side imgUrl={messages} imgText="Messages" />
            <Side imgUrl={bookmarks} imgText="Bookmarks" />
            <Side imgUrl={lists} imgText="Lists" />
            <Side imgUrl={profile} imgText="Profile" />
            <Side imgUrl={more} imgText="More" />
            <div className="btn menu-btns" >Tweet</div>
        </div>
    );
}