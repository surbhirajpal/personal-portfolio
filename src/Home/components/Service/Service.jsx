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
                        {'FRONTEND DEVELOPER AND DESGINER'}
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
                                        {`Hey! I'm Surbhi, your friendly neighborhood frontend wizard armed with React.js spells and a knack for turning ideas into pixel-perfect realities.
                                         When I'm not diving into the React ecosystem, I'm weaving wireframes and prototypes in Figma faster than you can say 'UI/UX magic.`} 
                                        <br/>
                                        {`Let's collaborate and bring your digital dreams to life with a touch of React wizardry and design finesse!`}
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