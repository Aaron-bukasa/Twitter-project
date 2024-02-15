import Tweet from "./fonctionnels/Tweet";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function UserPosts({localTweet}) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let allPosts = (localTweet === undefined) ? response.data : localTweet.concat(response.data);
        setPosts(allPosts)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [localTweet]);

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/amare53/twiterdb/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getComment = (id) => {
    const userComment = comments.filter((comment) => comment.postId === id);
    return userComment.length;
  }

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
        <li key={post?.id}>
          <Tweet
            id = {post.id}
            authorUrl = {post.authorUrl ? post.authorUrl : (users.find((user) => user.id === post.userId)?.thumbnailProfil)}
            source={post.source ? post.source : (users.find((user) => user.id === post.userId)?.name)}
            email={post.email ? post.email : (users.find((user) => user.id === post.userId)?.email)}
            urlTweetImg={post.url}
            text={post.body}
            like={post.like}
            repost={post.repost}
            comment={getComment(post.userId)}
            date = {post.date}
        />
        </li>
      ))}
    </ul>
  );
};
