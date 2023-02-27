import './Thumbnail.less';

const Thumbnail = ({
    width,
    index,
    scrollAnimateStart,
    scrollAnimateEnd,
    data,
}) => {
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
                    <div className='thumbnail-image' data-type={data.id}>
                        {/* <img src={`images/${data.image1}.svg`} /> */}
                        <img src={`images/about/${data.image}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;