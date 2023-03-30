import Image from "next/image";

function ServiceCard({backgrColor, imagePath, Text, title}) {
    
    const cardStyle={
        backgroundColor: backgrColor
    }
    
    return(
        <div className="ServiceCard" style={cardStyle}>
            <div className="ServiceImage">
                <Image className="image" src={imagePath} alt="service" fill/>
            </div>
            <div className="ServiceName">
                {Text} <b>{title}</b>
            </div>
        </div>
    );
}
export default ServiceCard