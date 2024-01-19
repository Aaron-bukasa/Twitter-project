import Header from "../componants/Header";
import TweetEditor from "../componants/TweetEditor";
import Tweets from "../componants/Tweets";

export default function Timeline() {

  return (
   <div className="max-w-screen-md w-full timeline">
      <Header />
      <TweetEditor />
      <Tweets />
   </div>
  )
}