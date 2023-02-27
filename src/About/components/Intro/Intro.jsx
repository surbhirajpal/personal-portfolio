import './Intro.less';

const Intro = () => {
    return (
        <section className='about-intro padding-stripe'>
            <div className='container'>
                <p className='about-intro__brief'>
                    {`
                        Greetings earthlings! I'm a front-end developer with more than 2 years of experience, 
                        always looking for ways to add a little extra sparkle to my code. 
                        When I'm not building beautiful and responsive websites, you can find me painting, dancing or working out.
                    `}
                </p>
            </div>
        </section>
    );
};

export default Intro;