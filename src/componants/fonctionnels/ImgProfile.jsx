import { useState, useEffect } from "react";
import axios from "axios";
import imgProfile from "../../assets/profil_full.png"

export default function ImgProfile({size}) {

    const [user, setUser] = useState();

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users/1")
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    let newSize = size ? size : 50;

    return (
        <img src={user?.profil} width={newSize} height={newSize} alt="profile Aaron bukasa" className="rounded-full"/>
    )
}