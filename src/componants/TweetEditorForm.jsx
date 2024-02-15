import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";

function TweetEditorForm({ localTweet ,setLocalTweet }) {
  const inputRef = useRef();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users/1")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  let tab;
  const handleClick = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const tweet = {
      id: 0 + localTweet?.length,
      authorUrl: user?.thumbnailProfil,
      source: user?.name,
      email: user?.email,
      urlTweetImg: inputRef.current.value,
      body: inputRef.current.value,
      like: 0,
      repost: 0,
      comment: 0,
      date: formattedDate,
    };
    if(tweet !== undefined) {
        setLocalTweet(tweet);
    }
    inputRef.current.value = '';
  };

  return (
    <div className="w-full tweet-editor-form">
      <div className="tweet-editor-buttons">
        <form action="">
          <label htmlFor="newTweet" className="newTweet">
            <input
              ref={inputRef}
              type="text"
              id="newTweet"
              placeholder="What's happening"
            />
          </label>
        </form>
        <div className="flex justify-between">
          <div className="flex gap-x-8">
            <div className="p-2 rounded-full hover:bg-[#0a171f]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D9BF0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25V19.75C2 20.99 3.01 22 4.25 22H19.75C20.99 22 22 20.99 22 19.75V4.25C22 3.01 20.99 2 19.75 2ZM4.25 3.5H19.75C20.163 3.5 20.5 3.837 20.5 4.25V13.926L16.642 10.068C16.502 9.928 16.312 9.848 16.112 9.848H16.109C15.909 9.848 15.716 9.928 15.577 10.072L11.26 14.456L9.447 12.65C9.307 12.51 9.117 12.43 8.917 12.43C8.724 12.4 8.522 12.51 8.382 12.657L3.5 17.642V4.25C3.5 3.837 3.837 3.5 4.25 3.5ZM3.506 19.78L8.924 14.246L15.206 20.5H4.25C3.848 20.5 3.523 20.178 3.506 19.78ZM19.75 20.5H17.33L12.323 15.513L16.115 11.663L20.5 16.047V19.75C20.5 20.163 20.163 20.5 19.75 20.5Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M8.86805 9.851C9.71967 9.851 10.41 9.16062 10.41 8.309C10.41 7.45738 9.71967 6.767 8.86805 6.767C8.01643 6.767 7.32605 7.45738 7.32605 8.309C7.32605 9.16062 8.01643 9.851 8.86805 9.851Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="p-2 rounded-full hover:bg-[#0a171f]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D9BF0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 10.5V8.8H14.6V15.2H16.3V13.2H18.3V11.5H16.3V10.5H19ZM11.7 8.8H13.4V15.2H11.7V8.8ZM8.10002 10.4C8.50002 10.4 9.00002 10.6 9.30002 10.9L10.5 9.89999C9.90002 9.19999 9.00002 8.8 8.10002 8.8C6.30002 8.8 4.90002 10.2 4.90002 12C4.90002 13.8 6.30002 15.2 8.10002 15.2C9.10002 15.2 9.90002 14.8 10.5 14.1V11.6H7.70002V12.8H8.90002V13.4C8.70002 13.5 8.40002 13.6 8.10002 13.6C7.20002 13.6 6.50002 12.9 6.50002 12C6.50002 11.2 7.20002 10.4 8.10002 10.4Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M20.5 2.02H3.5C2.26 2.02 1.25 3.027 1.25 4.267V19.774C1.25 21.012 2.26 22.02 3.5 22.02H20.5C21.74 22.02 22.75 21.012 22.75 19.774V4.267C22.75 3.027 21.74 2.02 20.5 2.02ZM21.25 19.774C21.25 20.184 20.914 20.52 20.5 20.52H3.5C3.086 20.52 2.75 20.184 2.75 19.774V4.267C2.75 3.855 3.086 3.52 3.5 3.52H20.5C20.914 3.52 21.25 3.855 21.25 4.267V19.774Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="p-2 rounded-full hover:bg-[#0a171f]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D9BF0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M12 17.115C10.108 17.115 8.36701 16.165 7.34401 14.571C7.12001 14.223 7.22101 13.761 7.57001 13.536C7.91801 13.31 8.38201 13.412 8.60601 13.762C9.35301 14.924 10.622 15.617 12.001 15.617C13.38 15.617 14.649 14.924 15.397 13.763C15.621 13.413 16.085 13.313 16.433 13.538C16.783 13.762 16.883 14.226 16.659 14.574C15.634 16.168 13.893 17.119 12.001 17.119L12 17.115Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M14.738 10.936C15.5543 10.936 16.216 10.2743 16.216 9.458C16.216 8.64173 15.5543 7.98 14.738 7.98C13.9217 7.98 13.26 8.64173 13.26 9.458C13.26 10.2743 13.9217 10.936 14.738 10.936Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M9.26206 10.936C10.0783 10.936 10.7401 10.2743 10.7401 9.458C10.7401 8.64173 10.0783 7.98 9.26206 7.98C8.44578 7.98 7.78406 8.64173 7.78406 9.458C7.78406 10.2743 8.44578 10.936 9.26206 10.936Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="p-2 rounded-full hover:bg-[#0a171f]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1D9BF0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7_307)">
                  <path
                    d="M-37.9 18C-38 17.9 -38 17.9 -38 17.8C-37.9 17.8 -37.9 17.9 -37.9 18ZM18 2.2H16.7V1.9C16.7 1.5 16.4 1.1 15.9 1.1C15.5 1.1 15.1 1.4 15.1 1.9V2.2H7.7V1.9C7.7 1.5 7.4 1.1 6.9 1.1C6.5 1.1 6.1 1.4 6.1 1.9V2.2H4.8C3.4 2.2 2.3 3.3 2.3 4.7V17.8C2.3 19.2 3.4 20.3 4.8 20.3H7.7C8.1 20.3 8.5 20 8.5 19.5C8.5 19.1 8.2 18.7 7.7 18.7H4.8C4.2 18.7 3.8 18.2 3.8 17.7V7.9C3.8 7.6 4.2 7.2 4.8 7.2H18C18.6 7.2 19 7.6 19 7.9V9.7C19 10.1 19.3 10.5 19.8 10.5C20.2 10.5 20.6 10.2 20.6 9.7V4.7C20.5 3.3 19.4 2.2 18 2.2ZM19 5.9C18.7 5.8 18.3 5.7 18 5.7H4.8C4.4 5.7 4.1 5.8 3.8 5.9V4.7C3.8 4.1 4.3 3.7 4.8 3.7H6.1V4.2C6.1 4.6 6.4 5 6.9 5C7.3 5 7.7 4.7 7.7 4.2V3.7H15.2V4.2C15.2 4.6 15.5 5 16 5C16.4 5 16.8 4.7 16.8 4.2V3.7H18C18.6 3.7 19 4.2 19 4.7V5.9Z"
                    fill="#D9D9D9"
                  />
                  <path
                    d="M15.5 10.4C12.1 10.4 9.29999 13.2 9.29999 16.6C9.29999 20 12.1 22.8 15.5 22.8C18.9 22.8 21.7 20 21.7 16.6C21.7 13.2 18.9 10.4 15.5 10.4ZM15.5 21.4C12.9 21.4 10.8 19.3 10.8 16.7C10.8 14.1 12.9 12 15.5 12C18.1 12 20.2 14.1 20.2 16.7C20.2 19.2 18.1 21.4 15.5 21.4Z"
                    fill="#D9D9D9"
                  />
                  <path
                    d="M18.9 18.7C18.8 18.9 18.5 19.1 18.3 19.1C18.2 19.1 18 19.1 17.9 19L14.8 17V14C14.8 13.6 15.1 13.2 15.6 13.2C16 13.2 16.4 13.5 16.4 14V16.2L18.8 17.7C19 17.9 19.1 18.3 18.9 18.7Z"
                    fill="#D9D9D9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_307">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="bg-blue-500 w-24 text-center py-2 rounded-3xl hover:opacity-80 hover:cursor-pointer"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditorForm;
