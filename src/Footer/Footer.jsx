import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

import './Footer.less';

const Footer = () => {
    const socialMedia = [
        {
            id: 'linkedin',
            link: 'https://www.linkedin.com/in/surbhi-rajpal-a91711184/',
            icon: faLinkedin
        },
        {
            id: 'github',
            link: 'https://github.com/surbhirajpal',
            icon: faGithub
        },
        {
            id: 'instagram',
            link: 'https://www.instagram.com/surbhi_rajpal_/',
            icon: faInstagram
        },

    ]
    return (
        <footer className='footer'>
            <div className='footer__wave' />
            <div className='footer__wrapper padding-stripe'>
                {
                    socialMedia.map((item, index) => {
                        return (
                            <a className='footer__link' key={index} href={item.link} target='blank'>
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        )
                    })
                }
            </div>
        </footer>
    );
};

export default Footer;
