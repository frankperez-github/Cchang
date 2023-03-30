import Image from "next/image";

function Header(){
    return(
        <div className="Header">
            <div className="CompanyName">
                <div className="name">
                    <h1>Construyendo</h1>
                    <h1>Confianza</h1>
                </div>
                <div className="photos">
                    
                </div>
            </div>
            <div className="navBar">
                <a href="#regionEmpresa">
                    SOBRE LA EMPRESA
                </a>
                <a href="regionProyectos">
                    PROYECTOS
                </a>
            </div>
        </div>
    );
}

export default Header