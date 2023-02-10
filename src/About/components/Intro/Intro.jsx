import './Intro.less';

const Intro = () => {
    return (
        <section className='stripe'>
            <div className='intro'>
                <div className='intro-content'>
                    <h1 className='intro-title'>
                        <p>{'Surbhi'}</p>
                        <p>{'Rajpal'}</p>
                    </h1>
                    <h2 className='intro-subtitle'>{'Frontend Developer'}</h2>
                    <p className='intro-brief'>{'Software Developer from Chandiagrh, India with solid experience in building UI applications with modern technologies'}</p>
                </div>
                <div className='intro-image'>
                    <img src = {'images/intro.png'}/>
                </div>
            </div>
        </section>
    );
};

export default Intro;