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

import './SubHero.less';

const SubHero = ({
    sectionHeight
}) => {
    const subHeroRef = useRef(null);
    const [scrollStart, setScrollStart] = useState(0);

    const { scrollY } = useScroll();

    const contentOpacity = useTransform(scrollY, [scrollStart + 100, scrollStart + 500], [1, 0.2]);

    useEffect(() => {
        const rect = subHeroRef?.current?.getBoundingClientRect();
        setScrollStart(rect?.top);
    }, [subHeroRef]);

    return (
        <section
            className='sub-hero'
            ref={subHeroRef}
        // style={{ height: sectionHeight }}
        >
            <div className='sub-hero__holder'>
                <div className='container'>
                    <div className='sub-hero__wrapper'>
                        <p>
                            <motion.span
                                style={{
                                    opacity: contentOpacity
                                }}
                            >
                                {`Whether you need a new website, a redesign, or just a touch of magic, I am ready to bring my skills and creativity to your project. `}
                            </motion.span>
                            <span>{`Let's work together `}</span>
                            <motion.span
                                style={{
                                    opacity: contentOpacity
                                }}
                            >
                                {`to create something amazing!`}
                            </motion.span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHero;
