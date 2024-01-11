import Tweet from "./fonctionnels/Tweet";
import iconTwitter from "../assets/icons/Twitter.svg";
import iconVerified from "../assets/icons/Verified.svg";
import logoCNN from "../assets/CNN.png";
import imageAvatar03 from "../assets/image 3.png";
import { useEffect, useState } from "react";
import dataJSON from '../assets/tweets-x.json';

// const tweet = dataJSON.map((data) => {
//      return (
//           <Tweet 
//                key={data.id}
//                avatarUrl={data.tweetAvatarUrl}
//                title={data.author}
//                imgUrl={iconVerified} 
//                times={data.date}
//                value={data.text}
//                urlTweetImg={data.imgTweet}
//           />
//      )
// })

export default function Tweets() {
    return (
        <ul className="tweets">
          {/* {tweet} */}
           <Tweet 
                avatarUrl={logoCNN} 
                imgUrl={iconVerified} 
                title="CNN"
                times="7min"
                value={`President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.`}
                />
           <Tweet 
                avatarUrl={iconTwitter} 
                imgUrl={iconVerified} 
                title="The New York Times"
                times="2h"
                value={`Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land`}
                urlTweetImg={imageAvatar03}
                />
           <Tweet 
                avatarUrl={iconTwitter} 
                imgUrl={iconVerified} 
                title="Twitter"
                times='Oct 29'
                value={`BIG NEWS lol jk still Twitter`}
                />
           <Tweet 
                avatarUrl={iconTwitter} 
                imgUrl={iconVerified} 
                title="Twitter"
                times="Oct 4"
                value={`hello literally everyone`} 
                />
            <Tweet 
                avatarUrl={iconTwitter} 
                imgUrl={iconVerified} 
                title="Twitter"
                times="Oct 4"
                value={`hello literally everyone`} 
                urlTweetImg={imageAvatar03}
                />
        </ul>
    );
}