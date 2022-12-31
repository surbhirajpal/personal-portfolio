import LordIcon from '../LordIcon';

import './Header.less';

const Header = () => {
    const data = [
        {
            id: 'Works',
            icon: 'https://cdn.lordicon.com/zpxybbhl.json',
            redirect: '',
        },
        {
            id: 'Resume',
            icon: 'https://cdn.lordicon.com/nocovwne.json',
            redirect: '',
        },
        {
            id: 'Shelf',
            icon: 'https://cdn.lordicon.com/qhgmphtg.json',
            redirect: '',
        }
    ]
    return (
        <header className='header'>
            <div className='header-logo'>
                <LordIcon
                    src="https://cdn.lordicon.com/dqxvvqzi.json"
                    trigger="morph"
                    colors={{ primary: '#6b576b', secondary: '#6b576b' }}
                    size={48}
                    stroke={20}
                />
            </div>
            <div className='header-content'>
                <div className='header-content__left'>
                    <LordIcon
                        src="https://cdn.lordicon.com/rhvddzym.json"
                        colors={{ primary: '#6b576b' }}
                        size={48}
                        stroke={50}
                    />
                    {'surbhirajpal88@gmail.com'}
                </div>
                <div className='header-content__right'>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='header-content-info' key={index}>
                                    <LordIcon
                                        src={item.icon}
                                        colors={{ primary: '#6b576b', secondary: '#6b576b' }}
                                        size={35}
                                        stroke={50}
                                    />
                                    <span>{item.id}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;