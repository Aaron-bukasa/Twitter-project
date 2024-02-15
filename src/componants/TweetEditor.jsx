import Avatar from "./fonctionnels/Avatar";
import TweetEditorForm from "./TweetEditorForm";
import imageAvatar from "../assets/profil_full.png"
import ImgProfile from "./fonctionnels/ImgProfile";
import { Link } from "react-router-dom";

function TweetEditor({setLocalTweet}) {
    return (
        <div className="flex gap-x-5 py-2.5 px-5 border-b-2 border-solid border-gray-800">
            <Link to='userProfil/1' className="shrink-0">
                <ImgProfile size="50"/>
            </Link>
            <TweetEditorForm setLocalTweet={setLocalTweet} />
        </div>
    );
}

export default TweetEditor;