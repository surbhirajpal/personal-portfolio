import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

import './Footer.less';

const Footer = () => {
    const socialMedia = [
        {
            id: 'linkedin',
            link: '',
            icon: faLinkedin
        },
        {
            id: 'github',
            link: '',
            icon: faGithub
        },
        {
            id: 'instagram',
            link: '',
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
                            <a className='footer__link' key={index} href={item.link} >
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
