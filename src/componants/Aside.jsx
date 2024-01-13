import search from '../assets/icons/Search.svg';
import Tranding from './Tranding';
import Follow from './Follow';
import Input from './fonctionnels/Input';
import iconSearch from '../assets/icons/Search.svg';

export default function Aside() {
    const Search = () => {
        return (
            <label htmlFor="aside-input" className='aside-label'>
                <span className='aside-input-span'>
                    <img src={search} alt="search" />
                </span>
                <input type="text" id="aside-input"  placeholder="Seach Twitter"/>
            </label>
        )
    }

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
            {/* <AnchorSide /> */}
            <Tranding />
            <Follow />
            <Footer />
        </div>
    )
}