import Tweet from "./fonctionnels/Tweet";
import datas from '../assets/tweets-x.json';
import { useState } from "react";

export default function Tweets() {

    return (
        <ul className="tweets">
          {datas.map((data) => (
               <Tweet 
                    key={data.id}
                    authorUrl={data.author_avatar} 
                    isVerified={data.isVerified}
                    source={data.source}
                    date={data.date}
                    text={data.text}
                    urlTweetImg={data.image}
               />
          ))}
        </ul>
    );
}