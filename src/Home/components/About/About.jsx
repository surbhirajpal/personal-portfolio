import {
    useRef,
    useState,
    useLayoutEffect,
    useEffect
} from "react";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import Thumbnails from './Thumbnail';

import AboutData from './AboutData.json';
import './About.less';

const About = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    const { scrollY } = useScroll();

    const [scrollRange, setScrollRange] = useState(0);
    const [scrollStart, setScrollStart] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth);
    });

    useEffect(() => {
        const rect = containerRef?.current?.getBoundingClientRect();
        setScrollStart(rect?.top);
        setContainerWidth(rect?.width);
    });

    const dataLength = AboutData.length;
    const scrollRangeEnd = scrollRange - (scrollRange / dataLength);
    const transform = useTransform(scrollY, [scrollStart, scrollRange], [0, -scrollRangeEnd]);

    console.log('scrollStart', scrollStart, scrollRange, scrollRangeEnd)

    return (
        <section ref={containerRef}>
            <div className="scroll-container">
                <motion.section
                    ref={scrollRef}
                    style={{ x: transform }}
                    className="thumbnails-container"
                >
                    <div className="thumbnails">
                        {
                            AboutData.map((item, index) => {
                                return (
                                    <Thumbnails
                                        width={containerWidth}
                                        index={index}
                                        scrollAnimateStart={0}
                                        scrollAnimateEnd={0}
                                        data={item}
                                    />
                                )
                            })
                        }
                        {/* <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" /> */}
                    </div>
                </motion.section>
            </div>
            <div style={{ height: scrollRange }} className="ghost" />
        </section>
    );
};

export default About;