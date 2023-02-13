import {
    useRef,
    useState,
    useEffect
} from "react";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import './Service.less';

const Service = () => {
    const serviceRef = useRef(null);
    const [scrollStart, setScrollStart] = useState(0);

    const { scrollY } = useScroll();

    const coderScale = useTransform(scrollY, [scrollStart, scrollStart + 200], [0.4, 0.7]);

    const codingPosition = useTransform(scrollY, [scrollStart + 350, scrollStart + 750], ['-70%', '-50%']);
    const codingOpacity = useTransform(scrollY, [scrollStart + 350, scrollStart + 750], [0, 1]);

    const contentOpacity = useTransform(scrollY, [scrollStart + 350, scrollStart + 750], [0, 1]);

    useEffect(() => {
        const rect = serviceRef?.current?.getBoundingClientRect();
        setScrollStart(rect?.top);
    }, [serviceRef]);

    console.log('scrollStart', scrollStart)
    return (
        <section className='service padding-stripe' ref={serviceRef}>
            <div className='service__wrapper'>
                <h1 className='service__title'>
                    {'What I Can Do'}
                </h1>
                <div className='service__content-wrapper'>
                    <div className='service__content-holder'>
                        <motion.div
                            style={{
                                opacity: contentOpacity
                            }}
                        >
                            <div className='service__subtitle'>
                                <p>{'FRONTEND DEVELOPER'}</p>
                            </div>
                            <div className='service__content'>
                                <p>
                                    {`As a front-end developer, I specialize in creating and implementing the visual and interactive elements of websites and web applications. 
                            My expertise lies in React.js and responsive design, and I have a strong understanding of the latest web development trends 
                            and technologies.`}
                                </p>
                                <p>
                                    {`Whether you need a new website, a redesign, or just a touch of magic, I am ready to bring my skills and creativity to your project. 
                            Let's work together to create something amazing!`}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className='service__image-holder'>
                        <div className='service__coder'>
                            <motion.div
                                style={{
                                    scale: coderScale,
                                    y: '-50%',
                                }}
                            >
                                <img src={'images/service/code.svg'} />
                            </motion.div>
                        </div>
                        <div className='service__coding'>
                            <motion.div
                                style={{
                                    scale: 0.8,
                                    y: codingPosition,
                                    opacity: contentOpacity,
                                }}
                            >
                                <img src={'images/service/coding.png'} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;