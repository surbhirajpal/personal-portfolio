import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import LordIcon from '../../../LordIcon';

import './WorkExperience.less';

const WorkExperience = () => {
    const experienceData = [
        {
            startDate: '01, 2020',
            endDate: '07, 2020',
            techIcon: 'https://cdn.lordicon.com/buqfvmsj.json',
            MainTech: 'React.js',
            designation: 'Software Engineer Trainee',
            company: 'Laxaar',
            technologies: ['HTML5', 'CSS3', 'SASS', 'React.js', 'AntDesign', 'npm', 'GitLab'],
            url: 'https://www.laxaar.com/'
        },
        {
            startDate: '11, 2020',
            endDate: 'Present',
            techIcon: 'https://cdn.lordicon.com/elvincae.json',
            MainTech: 'React.js',
            designation: 'Software Developer',
            company: `Osmo (Byju's)`,
            technologies: ['React.js', 'Javascript', 'Typescript', 'Framer motion', 'LESS/ SASS', 'Responsive Web design', 'Git', 'Storybook', 'HTML/CSS', 'REST API'],
            url: 'https://www.playosmo.com/en/'
        },
    ];

    const { scrollY } = useScroll();

    const screenHeight = window.innerHeight - 100;
    const opacity1 = useTransform(scrollY, [0, 500], [0, 1]);
    const opacity2 = useTransform(scrollY, [500, 1000], [0, 1]);

    return (
        <section className='work-exp padding-stripe'>
            <div className='container'>
                <div className='work-exp__path' style={{ height: screenHeight / 1.5 }}>
                    <div className='work-exp__tech-logo graduation'>
                        <LordIcon
                            src={'https://cdn.lordicon.com/puvaffet.json'}
                            trigger="morph"
                            colors={{ primary: '#6b576b', secondary: '#6b576b' }}
                            size={48}
                            stroke={50}
                        />
                    </div>
                    {
                        experienceData.map((data, index) => {
                            const contentOpacity = index === 0 ? opacity1 : opacity2;

                            return (
                                <div key={index} className='work-exp__holder' data-index={index + 1} style={{ height: screenHeight / 2 }}>
                                    <div className='work-exp__tech-logo'>
                                        <LordIcon
                                            src={data.techIcon}
                                            trigger="morph"
                                            colors={{ primary: '#6b576b', secondary: '#6b576b' }}
                                            size={48}
                                            stroke={50}
                                        />
                                    </div>

                                    <div className='work-exp__duration'><span>{`${data.startDate} - ${data.endDate}`}</span></div>
                                    <motion.div className='work-exp__detail' style={{ opacity: contentOpacity }}>
                                        <a href={data.url}>
                                            <p className='work-exp__main-tech'><span>{data.MainTech}</span></p>
                                            <p className='work-exp__designation'>{data.designation}</p>
                                            <p className='work-exp__company'>{data.company}</p>
                                            <div className='work-exp__skills'>
                                                {
                                                    data.technologies.map((item, index) => {
                                                        return (
                                                            <span key={index}>{item}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </a>
                                    </motion.div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;