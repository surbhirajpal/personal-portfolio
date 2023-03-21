import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

//TODO : Simplify imports of images in jsx files
import AnimalImage from '../../../../../public/images/about/animal.png';
import ArtistImage from '../../../../../public/images/about/artist.png';
import FoodieImage from '../../../../../public/images/about/foodie.png';
import DwightImage from '../../../../../public/images/about/dwight.png';
import MermaidImage from '../../../../../public/images/about/mermaid.png';
import TravelImage from '../../../../../public/images/about/travel.png';

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

    const ImageData = {
        animal: AnimalImage,
        artist: ArtistImage,
        foodie: FoodieImage,
        mentor: DwightImage,
        mermaid: MermaidImage,
        travel: TravelImage
    };

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
                        <img
                            src={ImageData[data.id]}
                            alt={data.id}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;