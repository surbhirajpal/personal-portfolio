import './Skills.less';

const Skills = () => {
    const skills = [
        'react',
        'ant-design',
        'css',
        'html',
        'javascript',
        'typescript',
        'framer-motion',
        'git',
        'less',
        'sass',
        'storybook',
    ];

    return (
        <section className='skills padding-stripe'>
            <div className='container'>
                <h1 className='skills__title'>{'SKILLS'}</h1>
                <div className='skills__wrapper'>
                    {
                        skills.map((item, index) => {
                            return (
                                <div className='skills__content'>
                                    <div className='skills__image'>
                                        <img
                                            key={index}
                                            src={`images/skills/${item}.png`}
                                            data-type={item}
                                        />
                                    </div>
                                    <p className='skills__name'>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;