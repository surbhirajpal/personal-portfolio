import './Hero.less';

const Hero = () => {
    const screenHeight = window.innerHeight;
    const sectionHeight = screenHeight - 100;

    return (
        <section className='about-hero' style={{ height: sectionHeight }}>
            <div className='padding-stripe'>
                <div className='container'>
                    <div className='about-hero__content'>
                        <p>{'The '}</p>
                        <p>{'adventure '}</p>
                        <p>{'starts here.'}</p>

                    </div>
                    <div className='about-hero__image'>
                        <img src={'images/about/about-hero.png'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;