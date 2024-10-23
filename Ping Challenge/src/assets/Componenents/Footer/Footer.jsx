import facebook from './icons/3057625_facebook_media_network_social_icon.png';
import instagram from './icons/8545475_instagram_network_socialmedia_user interface_icon.png';
import twitter from './icons/317720_social media_tweet_twitter_social_icon.png';
import copyright from './icons/9026475_copyright_thin_icon.png';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className='containers'>
                <img  className='socials' src={facebook} alt="facebook icon" />
                <img className='socials' src={twitter} alt="twitter icon" />
                <img className='socials' src={instagram} alt="instagram icon" />
            </div>
            <p><span><img className='icon' src={copyright} alt="copyright icon" /></span>Copyright PING.All rights reserved</p>
        </footer>
    )
}

export default Footer;