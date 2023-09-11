import SiteContext from "@/Context/siteContext";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

function GeneralInformation(){
    const{setSelected} = useContext(SiteContext)
    useEffect(()=>{
        setSelected(0)
        document.getElementById(1).style.border="none"
    })

    const [showing, setShowing] = useState(true)
    function showInfo(){
        
        const arrow = document.getElementById("arrow")
        const close = document.getElementById("close")
        var info = document.getElementById("InfoBody")
        
        if (showing)
        {
            info.style.display = "none" 
            setShowing(false)
            arrow.style.display = "block"
            close.style.display = "none"
        } 
        else
        {
            info.style.display = "block"
            setShowing(true)
            arrow.style.display = "none"
            close.style.display = "block"
        }

    }

    return(
        
        <div className="GeneralInfo mobContainer" >
            <div className="infoTitle desktopHidden" onClick={()=>showInfo()}>
                <h2>Información General</h2>
                <Image id="close" src="/close.png" className="image infoIcon" alt="X" fill/>
                <Image id="arrow" src="/downArrow.png" className="image infoIcon arrow" alt="X" fill/>
            </div>

            <div id="InfoBody">
                <p><b>CCHANG</b> es una empresa constructora especializada en la remodelación y el mantenimiento
                constructivo, así como la instalación, reparación y el mantenimiento de equipos y sistemas de refrigeración y clima y eléctricos.
                Su experiencia la abala el trabajo realizado en instalaciones trísticas, industriales, de la salud y sociales y administrativas.</p>
                <br/>
                <p>Contamos con una fuerza de trabajo clasificada y enfoca su gestión en lograr instalaciones confortables y sostenibles.</p>
                
                <br />
                <p><b>MISIÓN</b></p>
                <br/>
                <p>Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort: con
                    un personal competente y comprometido con satisfacer las exigencias de los clientes.
                </p>

                <br />
                <p><b>VISIÓN</b></p>
                <br/>
                <p>Contamos con el respeto y fidelidad de nuetsros clientes, internas y externas, que apuestan por la calidad, excelencia y garantía de nuestros servicios.</p>
            </div>
        </div>
    );
}
export default GeneralInformation