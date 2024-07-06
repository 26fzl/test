export default function CustomImage({imgSrc, pt}){
    return (
        <div className="custom-image" style={{paddigTop: pt}}> 
            <img src={imgSrc} alt="" />

        </div>
    )
}