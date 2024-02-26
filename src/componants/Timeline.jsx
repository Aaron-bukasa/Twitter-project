import Header from "../componants/Header";
import TweetEditor from "../componants/TweetEditor";
import UserPosts from "./Tweets";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Timeline({id}) {

  const [localTweet, setLocalTweet] = useState();
  const [tabLocalTweet, setTabLocalTweet] = useState([]);

  useEffect(() => {

    localTweet !== undefined ? 
        setTabLocalTweet([...tabLocalTweet, { ...localTweet }]) :
        setTabLocalTweet([...tabLocalTweet]);
    
  }, [localTweet]);

  return (
   <div className="max-w-screen-md w-full timeline">
      <Header title="Home" />
      <TweetEditor id={id} localTweet={localTweet} setLocalTweet={setLocalTweet} />
      <UserPosts localTweet={tabLocalTweet} />
   </div>
  )
}