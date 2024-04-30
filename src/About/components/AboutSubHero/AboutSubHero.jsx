import SubHero from '../../../generalComponents/SubHero';
import AboutHeroImage from '../../../../public/images/about/sub-hero.jpg';

import './AboutSubHero.less';

const AboutSubHero = () => {
    return (
        <SubHero
            initialCopy={`Greetings earthlings! I'm a frontend developer with 3 years of experience. Currently pursuing a Master's in User Experience Design, I love`}
            boldCopy={` crafting designs from scratch and coding them into reality `}
            laterCopy={` with React.js. Let's create seamless digital experiences together!`}
            backgroundImageUrl={AboutHeroImage}
            customClassName='about-sub-hero'
        />
    );
};

export default AboutSubHero;