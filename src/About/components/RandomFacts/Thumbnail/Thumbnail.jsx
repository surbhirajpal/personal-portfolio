import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import './Thumbnail.less';

const Thumbnail = ({
    width,
    index,
    scrollAnimateStart,
    scrollAnimateEnd,
    data,
}) => {
    const { scrollY } = useScroll();
    const transform = useTransform(scrollY, [scrollAnimateStart, scrollAnimateEnd], [0, 200]);

    return (
        <div
            className='thumbnail'
            key={index}
            style={{
                width: width,
                backgroundColor: data.backgroundColor,
                color: data.textColor,
            }}
            data-type={data.id}
        >
            <div className='thumbnail-wrapper padding-stripe'>
                <div className='container'>
                    <div className='thumbnail-content'>{data.content}</div>
                    <motion.div
                        className='thumbnail-image'
                        data-type={data.id}
                        style={{
                            x: transform
                        }}
                    >
                        <img src={`images/about/${data.image}`} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;