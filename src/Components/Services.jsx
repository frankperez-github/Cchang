import ServiceCard from "./ServiceCard";
function Services(){
    return(
        <div className="Services mobContainer">
            <h2>Servicios</h2>
            <ServiceCard backgrColor="gray" imagePath="/service1.png" Text="Instalación, Reparación y Mantenimiento de" title="Sistemas Eléctricos"/>
            <ServiceCard backgrColor="blue" imagePath="/service2.png" Text="Instalación, Reparación y Mantenimiento de sistemas y equipos de" title="Refrigeración y Clima"/>
            <ServiceCard backgrColor="black" imagePath="/service3.png" Text="Construcción, Remodelación y Mantenimiento de" title="Inmuebles"/>
        </div>  
    );
}
export default Services