import Tweet from "./fonctionnels/Tweet";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function UserPosts() {
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
            id = {post.id}
            authorUrl = {users.find((user) => user.id === post.userId)?.thumbnailProfil}
            source={users.find((user) => user.id === post.userId)?.name}
            email={users.find((user) => user.id === post.userId)?.email}
            urlTweetImg={post.url}
            text={post.body}
            like={post.like}
            repost={post.repost}
        />
        </li>
      ))}
    </ul>
  );
};
