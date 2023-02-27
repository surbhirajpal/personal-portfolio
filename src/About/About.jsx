import Hero from './components/Hero';
import Intro from './components/Intro';
import RandomFacts from './components/RandomFacts';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';

import './About.less';

const About = () => {
    
    return (
        <>
            <Hero />
            <Intro />
            <RandomFacts />
            <WorkExperience />
            <Skills />
        </>
    );
};

export default About;