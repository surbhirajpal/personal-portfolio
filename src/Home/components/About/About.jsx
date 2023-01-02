import {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
    useEffect
} from "react";

import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue
} from "framer-motion";

import 'intersection-observer';
import useScrollPercentage from 'react-scroll-percentage-hook';

import './About.less';

const About = () => {
    const scrollRef = useRef(null);
    const ghostRef = useRef(null);
    const wrapperRef = useRef(null);

    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);
    const [scrollStart, setScrollStart] = useState(0)

    const scrollPerc = useMotionValue(0);
    const { scrollYProgress } = useScroll();


    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth);
    }, [scrollRef]);

    const onResize = useCallback((entries) => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const { containerRef, percentage } = useScrollPercentage();

    useEffect(() => {
        scrollPerc.set(percentage?.vertical);
    }, [percentage]);

    useEffect(() => {
        const rect = wrapperRef?.current?.getBoundingClientRect();
        setScrollStart(rect?.top) 
    })

    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange + viewportW]
    );
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    console.log("scrollPerc", scrollPerc, percentage);

    return (
        <div ref={wrapperRef}>
            <div className="scroll-container">
                {/* {percentage} */}

                <motion.section
                    ref={scrollRef}
                    style={{ x: transform }}
                    className="thumbnails-container"
                >
                    <div className="thumbnails">
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                    </div>
                </motion.section>
            </div>
            <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
        </div>
    );
};

export default About;
