import { useEffect, useState } from "react";
import axios from "axios";
import Tweet from "../fonctionnels/Tweet";

function Post() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const address = window.location.pathname;
    const index = address.match(/[(0-9)]/)[0];

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
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
          .then((response) => {
            return response.data;
          })
          .then((data) => {
            console.log(data.filter((post) => post.userId === index));
          })
          .catch((error) => {
            console.error(error);
          });
    }, []);

    return (
        <div>
            <h2 className='text-xl my-8'>mes Postes</h2>
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
                    />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Post