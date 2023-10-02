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
                <p>{Text.split(' ').map((word, index)=>{
                    if(word === "Remodelación")
                    {
                        return(<b key={index}>REMODELACIÓN</b>)
                    }
                    else
                    {
                        return(word+" ")
                    }
                    })} <b>{title}</b></p>
            </div>
        </div>
    );
}
export default ServiceCard