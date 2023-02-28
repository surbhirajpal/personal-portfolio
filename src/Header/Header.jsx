import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LordIcon from '../LordIcon';

import './Header.less';

const Header = () => {
    const [pathname, setPathname] = useState(window.location.pathname.replace('/', ''));
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
        // {
        //     id: 'Shelf',
        //     icon: 'https://cdn.lordicon.com/qhgmphtg.json',
        //     redirect: 'shelf',
        // }
    ]

    useEffect(() => {
        setPathname(window.location.pathname.replace('/', ''));
    }, [window.location.pathname])


    return (
        <header className='header-wrapper' data-page={pathname}>
            <div className='header container'>
                <Link to={'/'} className='header-logo'>
                    <LordIcon
                        src="https://cdn.lordicon.com/dqxvvqzi.json"
                        trigger="morph"
                        colors={{ primary: '#fff', secondary: '#fff' }}
                        size={48}
                        stroke={20}
                    />
                </Link>
                <div className='header-content'>
                    <Link className='header-content__left'>
                        {/* <LordIcon
                        src="https://cdn.lordicon.com/rhvddzym.json"
                        colors={{ primary: '#6b576b' }}
                        size={48}
                        stroke={50}
                    /> */}
                        {'contact'}
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
                                        {/* <LordIcon
                                        src={item.icon}
                                        colors={{ primary: '#fff', secondary: '#fff' }}
                                        size={35}
                                        stroke={50}
                                    /> */}
                                        <span>{item.id}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;