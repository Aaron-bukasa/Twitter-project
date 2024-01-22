import imgProfile from "../../assets/profil_full.png"

export default function ImgProfile({size}) {

    let newSize = size ? size : 50;

    return (
        <img src={imgProfile} width={newSize} height={newSize} alt="profile Aaron bukasa" className="rounded-full"/>
    )
}