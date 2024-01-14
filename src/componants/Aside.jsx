import Tranding from './Tranding';
import Follow from './Follow';
import Input from './fonctionnels/Input';
import iconSearch from '../assets/icons/Search.svg';

export default function Aside() {

    const Footer = () => {
        return (
            <div className="footer">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Imprint</a>
                <a href="#">Ads info</a>
                <a href="#">More ...</a>
                <span>© 2021 Twitter, Inc.</span>
            </div>
        )
    }

    return (
        <div className="aside">
            <Input urlImage={iconSearch} placeholderInput="Search Twitter" idInput="search" />
            <Tranding />
            <Follow />
            <Footer />
        </div>
    )
}