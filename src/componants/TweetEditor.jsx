import Avatar from "./fonctionnels/Avatar";
import TweetEditorForm from "./TweetEditorForm";
import imageAvatar from "../assets/profil_full.png"

function TweetEditor() {
    return (
        <div className="bg-yellow tweet-editor">
            <Avatar avatarUrl={imageAvatar}/>
            <TweetEditorForm />
        </div>
    );
}

export default TweetEditor;