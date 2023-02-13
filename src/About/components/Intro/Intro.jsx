import './Intro.less';

const Intro = () => {
    return (
        <section className='padding-stripe'>
            <div className='intro'>
                <div className='intro-content'>
                    <h1 className='intro-title'>
                        {'About.'}
                    </h1>
                    <p className='intro-brief'>{`
                        Greetings earthlings! I'm a front-end developer with more than 2 years of experience, 
                        always looking for ways to add a little extra sparkle to my code. 
                        When I'm not building beautiful and responsive websites, you can find me painting, dancing or working out.
                    `}</p>
                </div>
                <div className='intro-image'>
                    <img src={'images/intro-designer.jpg'} />
                </div>
            </div>
        </section>
    );
};

export default Intro;