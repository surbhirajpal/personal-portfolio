import './Hero.less';
import AboutHeroImage from '../../../../public/images/about/intro.png';

const Hero = () => {
    const screenHeight = window.innerHeight;
    const sectionHeight = screenHeight - 100;

    return (
        <section className='about-hero padding-stripe'>
            <div className='container'>
                <div className='about-hero__wrapper'>
                    <div className='about-hero__content'>
                        <p>{'The '}</p>
                        <p>{'adventure '}</p>
                        <p>{'starts here.'}</p>

                    </div>
                    <div className='about-hero__image'>
                        <img
                            src={AboutHeroImage}
                            alt='about hero image'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;