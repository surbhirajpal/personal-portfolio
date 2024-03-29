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

import ServiceCodingImage from '../../../../public/images/home/coding.png';
import ServiceCodeImage from '../../../../public/images/home/code.svg';

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

    return (
        <section className='service padding-stripe' ref={serviceRef}>
            <div className='service__wrapper container'>
                <div>
                    <h1 className='service__title'>
                        {'FRONTEND DEVELOPER'}
                    </h1>
                    <div className='service__content-wrapper'>
                        <div className='service__content-holder'>
                            <motion.div
                                style={{
                                    opacity: contentOpacity
                                }}
                            >
                                <div className='service__content'>
                                    <p>
                                        {`As a front-end developer, I specialize in creating and implementing the visual and interactive elements of websites and web applications. 
                            My expertise lies in React.js and responsive design, and I have a strong understanding of the latest web development trends 
                            and technologies.`}
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
                                    <img
                                        src={ServiceCodeImage}
                                        alt='service code image'
                                    />
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
                                    <img
                                        src={ServiceCodingImage}
                                        alt='service coding image'
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;