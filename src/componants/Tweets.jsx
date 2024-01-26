import Tweet from "./fonctionnels/Tweet";
import datas from '../assets/tweets-x.json';
// import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProfileTweet from "./fonctionnels/ProfileTweet";

import React, { useState, useEffect } from "react";

let handleClick;

function UserProfil() {
  const [oneUser, setOneUser] = useState({})

  handleClick = () => {
  e.preventDefaut();
  let id = document.querySelector("#id").dataset.user;

  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/${id}`)
      .then((response) => {
        setOneUser(response.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ProfileTweet 
        urlBannere={oneUser.thumbnailProfil}
        urlProfil={oneUser.profil}
        userName={oneUser.name}
        userEmail={oneUser.email}
        userDescription={oneUser.username}
        userJoinTwitter={oneUser.Joined}
    />
  )
  
  }
}

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul className="tweets">
      {posts.map((post) => (
        <li key={post.id}>
          <Tweet
          authorUrl = {users.find((user) => user.id === post.userId)?.thumbnailProfil}
          source={users.find((user) => user.id === post.userId)?.name}
          email={users.find((user) => user.id === post.userId)?.email}
          urlTweetImg={post.url}
          text={post.body}
          id={post.id}
          onHandleClick={handleClick}
        />
        </li>
      ))}
    </ul>
  );
};

export {UserProfil, UserPosts}


