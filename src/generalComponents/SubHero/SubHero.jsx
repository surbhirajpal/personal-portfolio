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
    initialCopy,
    boldCopy,
    laterCopy,
    backgroundImageUrl = 'images/home/hero-bg.jpg',
    customClassName='',
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
            className={`sub-hero ${customClassName}`}
            ref={subHeroRef}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
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
                                {initialCopy}
                            </motion.span>
                            <span>{boldCopy}</span>
                            <motion.span
                                style={{
                                    opacity: contentOpacity
                                }}
                            >
                                {laterCopy}
                            </motion.span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHero;
