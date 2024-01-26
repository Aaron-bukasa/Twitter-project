import Header from "../componants/Header";
import TweetEditor from "../componants/TweetEditor";
import { UserPosts } from './Tweets';

export default function Timeline() {

  return (
   <div className="max-w-screen-md w-full timeline">
      <Header />
      <TweetEditor />
      <UserPosts />
   </div>
  )
}