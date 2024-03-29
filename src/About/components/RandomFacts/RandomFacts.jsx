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

import RandomFactsData from './RandomFactsData.json';
import './RandomFacts.less';

const RandomFacts = () => {
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

    const dataLength = RandomFactsData.length;
    const scrollRangeEnd = scrollRange - (scrollRange / dataLength);
    const transform = useTransform(scrollY, [scrollStart, scrollRange], [0, -scrollRangeEnd]);


    return (
        <section ref={containerRef} className='random-facts'>
            <div className='random-facts__wrapper'>
                <div className="random-facts__scroll-container">
                    <motion.section
                        ref={scrollRef}
                        style={{ x: transform }}
                        className="random-facts__thumbnails-container"
                    >
                        <div className="random-facts__thumbnails">
                            {
                                RandomFactsData.map((item, index) => {
                                    const halfWidth = containerWidth / 2;
                                    return (
                                        <Thumbnails
                                            width={containerWidth}
                                            index={index}
                                            scrollAnimateStart={scrollStart + ((index + 1) * halfWidth) + (index * halfWidth)}
                                            scrollAnimateEnd={scrollStart + ((index + 1) * containerWidth) + 200}
                                            data={item}
                                        />
                                    )
                                })
                            }
                        </div>
                    </motion.section>
                </div>
            </div>
            <div style={{ height: scrollRangeEnd }} className="random-facts__ghost" />
        </section>
    );
};

export default RandomFacts;