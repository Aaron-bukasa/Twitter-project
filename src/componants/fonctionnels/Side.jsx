import { Link } from "react-router-dom";
import Image from "./Image";

export default function Side({imgUrl, link, txt, styleClass}) {

    const image = imgUrl && <Image imgUrl={imgUrl}/>
    const texte = txt && <span>{txt}</span>
    styleClass = styleClass ? styleClass : (txt && txt.toLowerCase());

    return (
        <Link to={link} className={{styleClass}} >
            {image}
            {texte}
        </Link>
    )
}