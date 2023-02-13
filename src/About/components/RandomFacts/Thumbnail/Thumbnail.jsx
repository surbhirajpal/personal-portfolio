import './Thumbnail.less';

const Thumbnail = ({
    width,
    index,
    scrollAnimateStart,
    scrollAnimateEnd,
    data,
}) => {
    return (
        <div className='thumbnail' style={{ width: width }} data-type={data.id} key={index}>
            <div className='thumbnail-wrapper'>
                <div className='thumbnail-image'>
                    <img src={`images/${data.image1}.svg`} />
                </div>
                <div className='thumbnail-content'>{data.content}</div>
            </div>
        </div>
    );
};

export default Thumbnail;