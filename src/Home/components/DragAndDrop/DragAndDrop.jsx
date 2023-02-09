import {
    useRef,
    useState,
    useEffect,
} from "react";

import {
    motion,
} from "framer-motion";

import './DragAndDrop.less';

const DragAndDrop = () => {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    const [isDragged, setIsDragged] = useState(false)

    useEffect(() => {
        const rect = containerRef?.current?.getBoundingClientRect();
        setContainerWidth(rect?.width);
        setContainerHeight(rect?.height);
    })

    console.log('containerWidth', containerWidth)
    return (
        <section className='drag-drop' ref={containerRef}>
            <div className="drag-drop__container">
                <motion.div
                    className='drag-drop__image'
                    drag
                    dragConstraints={containerRef}
                    onDragStart={() => setIsDragged(true)}
                    animate={{
                        // x: [0, 500, 500, 300, 600, 0],
                        // y: [0, 200, 400, 100, 300, 250, 0],

                        x: [0, containerWidth/4, -containerWidth/4, 0],
                        y: [0, containerHeight/4, -containerHeight/4, 0]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <div className='drag-drop__text'>{isDragged ? `WHY WOULD YOU DO THAT :(` : `PLEASE DO NOT DRAG AND DROP ME`}</div>
            </div>
        </section>
    );
};

export default DragAndDrop;