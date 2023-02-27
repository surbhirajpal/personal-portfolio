import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import './Introduction.less';

const Introduction = ({
    sectionHeight,
}) => {
    const [mouseDirection, setMouseDirection] = useState('center');

    const variationConstant = 100;
    const [widthVariant, setWidthVariant] = useState(mouseDirection === 'center' ? 0 : variationConstant);

    const [containerWidth, setContainerWidth] = useState(0);

    const containerRef = useRef(null);

    const getRelativeCoordinates = (event) => {
        const position = {
            x: event.pageX,
            y: event.pageY
        };
        const cursorPosition = event.pageX;
        const windowWidth = window.innerWidth;
        const centerPoint = windowWidth / 2;
        const cursorPositionFromCenter = cursorPosition - centerPoint;
        const newWidthVariant = (cursorPositionFromCenter / 10);
        setWidthVariant(newWidthVariant)


        const cursorDirection = cursorPositionFromCenter === 0 ? 'center' : cursorPositionFromCenter > 0 ? 'right' : 'left';
        setMouseDirection(cursorDirection);

        return position
    }

    const handleMouseMove = e => {
        getRelativeCoordinates(e);
    };

    useEffect(() => {
        const rect = containerRef?.current?.getBoundingClientRect();
        setContainerWidth(rect?.width);
    })

    return (
        <section className='introduction' style={{height : sectionHeight}}>
            <motion.div
                style={{ height: '600px' }}
                onMouseMove={e => handleMouseMove(e)}
                ref={containerRef}
                className='introduction__container'
            >
                <motion.div className='introduction__designer'
                    animate={{
                        width: ((containerWidth / 2) - variationConstant) - widthVariant,
                        left: `${variationConstant - (-widthVariant)}px`,
                    }}
                >
                </motion.div>

                <motion.div className='introduction__coder'
                    animate={{
                        width: ((containerWidth / 2) - variationConstant) - (-widthVariant),
                        right: `${variationConstant - widthVariant}px`,
                    }}
                >
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Introduction;