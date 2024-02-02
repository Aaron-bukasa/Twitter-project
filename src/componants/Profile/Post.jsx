import { useEffect, useState } from "react";
import axios from "axios";
import Tweet from "../fonctionnels/Tweet";

function Post() {

    const address = window.location.pathname;
    const index = address.match(/\/(\d+)/)?.[1];

    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
      axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/posts?userId=${index}`)
          .then((response) => {
            setUserPosts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    }, []);

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

    return (
        <div>
            <ul className="tweets">
                {userPosts.map((post) => (
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
                        comment={getComment(post.userId)}
                    />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Post