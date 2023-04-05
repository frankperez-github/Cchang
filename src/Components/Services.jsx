import Link from "next/link";
import ServiceCard from "./ServiceCard";
function Services(){
    return(
        <div className="Services mobContainer">
            <h2>Servicios</h2>
            <Link href={`/Projects?category=eléctricos`}>
                <ServiceCard backgrColor="#0078DB" imagePath="/service1.png" Text="Instalación, Reparación y Mantenimiento de" title="Sistemas Eléctricos"/>
            </Link>
            <Link href={`/Projects?category=clima`}>
                <ServiceCard backgrColor="#003C8A" imagePath="/service2.png" Text="Instalación, Reparación y Mantenimiento de sistemas y equipos de" title="Refrigeración y Clima"/>
            </Link>
            <Link href={`/Projects?category=reparaciones`}>
                <ServiceCard backgrColor="#181833" imagePath="/service3.png" Text="Construcción, Remodelación y Mantenimiento de" title="Inmuebles"/>
            </Link>
        </div>  
    );
}
export default Services