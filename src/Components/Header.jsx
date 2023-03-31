import Image from "next/image";
import Link from "next/link";

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
                <Link href="/">
                    SOBRE LA EMPRESA
                </Link>
                <Link href="/Projects">
                    PROYECTOS
                </Link>
            </div>
        </div>
    );
}

export default Header