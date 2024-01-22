const Avatar = ({avatarUrl, size}) => {

    size = size ? size : 200;

    return (
        <div>
            <img src={avatarUrl} alt="profil tweet" className="avatar" width={size} height={size}/>
        </div>
    )
}

export default Avatar;