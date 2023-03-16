import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LordIcon from '../LordIcon';

import './Header.less';

const Header = () => {
    const [pathname, setPathname] = useState(window.location.pathname.replace('/', ''));
    const [isMobile, setIsMobile] = useState(null);

    const [showSlider, setShowSlider] = useState(false);

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
    ]

    useEffect(() => {
        setPathname(window.location.pathname.replace('/', ''));
    }, [window.location.pathname]);

    useEffect(() => {
        function updateSize() {
            setIsMobile(window.innerWidth <= 767);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

    }, [window.innerWidth]);

    const handleToggleClick = () => {
        setShowSlider(!showSlider);
    }


    return (
        <header className='header-wrapper' data-page={pathname}>
            <div className='header container'>
                {
                    isMobile ?
                        <>
                            <div className='header-slider__toggle' onClick={handleToggleClick}>
                                <LordIcon
                                    src="https://cdn.lordicon.com/wgwcqouc.json"
                                    colors={{ primary: '#fff', secondary: '#fff' }}
                                    size={48}
                                    stroke={30}
                                >
                                </LordIcon>
                            </div>

                            <Link to={'/'} className='header-slider__home'>
                                <LordIcon
                                    src="https://cdn.lordicon.com/dqxvvqzi.json"
                                    trigger="morph"
                                    colors={{ primary: '#fff', secondary: '#fff' }}
                                    size={48}
                                    stroke={20}
                                />
                            </Link>
                        </>
                        : <>
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
                                                    <span>{item.id}</span>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                }

            </div>

            {
                <div className={`slider ${showSlider ? 'show' : 'hide'}`}>
                    <div className='slider__header'>
                        <span onClick={handleToggleClick}>{'Close'}</span>
                    </div>

                    <div className='slider__content-wrapper'>
                        <div className='slider__content' onClick={() => setShowSlider(false)}>
                            <Link
                                to={`/`}
                                className='header-content-info'
                            >
                                <span>{'Home'}</span>
                            </Link>
                        </div>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='slider__content' onClick={() => setShowSlider(false)} key={index}>
                                        <Link
                                            to={`/${item.redirect}`}
                                            className='header-content-info'
                                        >
                                            <span>{item.id}</span>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            }
        </header>
    );
};

export default Header;