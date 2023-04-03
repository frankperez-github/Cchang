import { useState } from "react";


function GeneralInformation(){
    

    const [showing, setShowing] = useState(true)

    function showInfo(){
        
        var info = document.getElementById("InfoBody")
        if (showing)
        {
            info.style.display = "none" 
            setShowing(false)

        } 
        else
        {
            info.style.display = "block"
            setShowing(true)
        }

    }

    return(
        
        <div className="GeneralInfo mobContainer" >
            <div className="infoTitle desktopHidden" onClick={()=>showInfo()}>
                <h2>Información General</h2>
                <h2>X</h2>
                {/* Image para pestanna */}
                {/* Image para cerrar pestanna */}
            </div>

            <div id="InfoBody">
                <p><b>CCHANG</b> es una empresa constructora especializada en la remodelación y el mantenimiento
                constructivo, así como la instalación, reparación y el mantenimiento de equipos y sistemas de refrigeración y clima y eléctricos.
                Su experiencia la abala el trabajo realizado en instalaciones trísticas, industriales, de la salud y sociales y administrativas.</p>
                <br/>
                <p>Contamos con una fuerza de trabajo clasificada y enfoca su gestión en lograr instalaciones confortables y sostenibles.</p>
                
                <h3>MISIÓN</h3>
                <br/>
                <p>Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort: con
                    un personal competente y comprometido con satisfacer las exigencias de los clientes.
                </p>

                <h3>VISIÓN</h3>
                <br/>
                <p>Contamos con el respeto y fidelidad de nuetsros clientes, internas y externas, que apuestan por la calidad, excelencia y garantía de nuestros servicios.</p>
            </div>
        </div>
    );
}
export default GeneralInformation