function Image({imgUrl, altImg, className}) {

    return (
        <img src={imgUrl} alt={altImg} className={className}/>
    )
}

export default Image;