import Image from "next/image";
import ReturnBar from "@/Components/ReturnBar";
import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import { useEffect } from "react";

function Project() {

    useEffect(()=>{
            console.log(document.getElementById("message").style.display)
    }, [])

    return(
        <>
            <div className="mobileHidden">
                <Header />
            </div>
            <ReturnBar />    
            <div className="Project mobContainer desktopHidden">
                
                <p><b>Remodelación</b> de las oficinas comerciales de Nissan en Cuba</p>
                
                <Image className="image projectImage" src="/projectImage.png" alt="projectImage" fill/>
                
                <div className="photoFoot">
                    <h2>Explicación</h2>
                    <div className="reviews">
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <div className="">
                            <p>(24)</p>
                        </div>
                    </div>
                </div>

                <p>
                    Construir, reparar y mantener
                    infraestructuras, así como instalar y
                    sostener sistemas eléctricos y de
                    refrigeración y clima, garantizando
                    calidad y confort; con un personal
                    competente y comprometido con
                    satisfacer las exigencias de los clientes
                </p>

                <h2>Otras imágenes</h2>

                <div className="projectImages">
                    <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                    <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                    <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                    <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                </div>

                <h2>Califica nuestro trabajo</h2>
                <div className="reviews completeReview">
                    <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <div className="reviewsQuantity">
                        <p>(24)</p>
                    </div>
                </div>
            </div>
            <div className="desktopHidden">
                <Contact />
            </div>

            <div className="desktopDistribution mobileHidden">

                <div className="left column">
                    <p><b>Remodelación</b> de las oficinas comerciales de Nissan en Cuba</p>
                    
                    <Image className="image projectImage" src="/projectImage.png" alt="projectImage" fill/>
                    
                    <div className="photoFoot">
                        <h2>Valoración</h2>
                        <div className="reviews">
                            <Image className="image" src="/star.png" fill alt="*"/>
                            <Image className="image" src="/star.png" fill alt="*"/>
                            <Image className="image" src="/star.png" fill alt="*"/>
                            <Image className="image" src="/star.png" fill alt="*"/>
                            <Image className="image" src="/star.png" fill alt="*"/>
                            <div className="">
                                <p>(24)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center-left column">
                    <h2>Otras imágenes</h2>

                    <div className="projectImages">
                        <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                        <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                        <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                        <Image className="image projectImagePrev" src="/projectImage1.png" fill alt="*"/>
                    </div>
                </div>
                <div className="center-right column">
                    <h2>Explicación</h2>
                    <p>
                        Construir, reparar y mantener
                        infraestructuras, así como instalar y
                        sostener sistemas eléctricos y de
                        refrigeración y clima, garantizando
                        calidad y confort; con un personal
                        competente y comprometido con
                        satisfacer las exigencias de los clientes
                    </p>
                    <h2>Califica nuestro trabajo</h2>
                    <div className="reviews completeReview">
                        <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <Image className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <div className="reviewsQuantity">
                            <p>(24)</p>
                        </div>
                    </div>
                </div>
                <div className="right column">
                    <Contact />
                </div>
            </div>
        </>
    );
}
export default Project