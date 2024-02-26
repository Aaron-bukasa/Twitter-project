import TweetEditorForm from "./TweetEditorForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TweetEditor({id, setLocalTweet}) {

    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/auth/users/${id}/profil`)
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return (
        <div className="flex gap-x-5 py-2.5 px-5 border-b-2 border-solid border-gray-800">
            <Link to={'userProfil/'+id} className="shrink-0">
                 <img src={user?.thumbnailProfil} width={50} height={50} alt={"profile "+user?.username} className="rounded-full"/>
            </Link>
            <TweetEditorForm setLocalTweet={setLocalTweet} />
        </div>
    );
}

export default TweetEditor;