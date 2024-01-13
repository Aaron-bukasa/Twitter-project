import more2 from '../assets/icons/More-2.svg';
import settings from '../assets/icons/Settings.svg';

const Tranding = () => {
    function Trand({country, title, tweets}) {
        return (
            <div className='trand'>
                <div>
                    <div className='trand-info'>Tending in {country}</div>
                    <h3>#{title}</h3>
                    <div className='trand-info'>{tweets} tweets</div>
                </div>
                <div className="trand-more">
                    <img src={more2} alt="more" />
                </div>
            </div>
        )
    }
    
    return (
        <div className="tranding">
            <div className="tranding-head">
                <h3 className="tranding-head-h3">Trends for you</h3>
                <div className="tranding-head-tools">
                    <img src={settings} alt="settings" />
                </div>
            </div>
            <div className="tranding-content">
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
                <Trand country="Turkey" title="SQUID" tweets="2,066" />
            </div>
            <div className="more">Show more</div>
        </div>
    )
}

export default Tranding;