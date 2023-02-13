import { Link } from "react-router-dom";

import LordIcon from '../LordIcon';

import './Header.less';

const Header = () => {
    const data = [
        {
            id: 'About',
            icon: 'https://cdn.lordicon.com/zpxybbhl.json',
            redirect: 'about',
        },
        {
            id: 'Works',
            icon: 'https://cdn.lordicon.com/zpxybbhl.json',
            redirect: 'work',
        },
        {
            id: 'Resume',
            icon: 'https://cdn.lordicon.com/nocovwne.json',
            redirect: 'resume',
        },
        {
            id: 'Shelf',
            icon: 'https://cdn.lordicon.com/qhgmphtg.json',
            redirect: 'shelf',
        }
    ]
    return (
        <header className='header'>
            <Link to={'/'} className='header-logo'>
                <LordIcon
                    src="https://cdn.lordicon.com/dqxvvqzi.json"
                    trigger="morph"
                    colors={{ primary: '#6b576b', secondary: '#6b576b' }}
                    size={48}
                    stroke={20}
                />
            </Link>
            <div className='header-content'>
                <Link className='header-content__left'>
                    <LordIcon
                        src="https://cdn.lordicon.com/rhvddzym.json"
                        colors={{ primary: '#6b576b' }}
                        size={48}
                        stroke={50}
                    />
                    {'surbhirajpal88@gmail.com'}
                </Link>
                <div className='header-content__right'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link
                                    to={`/${item.redirect}`}
                                    className='header-content-info'
                                    key={index}
                                >
                                    <LordIcon
                                        src={item.icon}
                                        colors={{ primary: '#6b576b', secondary: '#6b576b' }}
                                        size={35}
                                        stroke={50}
                                    />
                                    <span>{item.id}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;