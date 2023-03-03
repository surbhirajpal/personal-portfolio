import SubHero from '../../../generalComponents/SubHero';

import './AboutSubHero.less';

const AboutSubHero = () => {
    return (
        <SubHero
            initialCopy={`Greetings earthlings! I'm a front-end developer with more than 2 years of experience, always looking for ways to `}
            boldCopy={`add a little extra sparkle `}
            laterCopy={`to my code. When I'm not building beautiful and responsive websites, you can find me painting, dancing or working out.`}
            backgroundImageUrl={'images/about/sub-hero.jpg'}
            customClassName='about-sub-hero'
        />
    );
};

export default AboutSubHero;