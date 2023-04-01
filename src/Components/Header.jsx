import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import SiteContext from "@/Context/siteContext";

function Header(){

    const {selected, setSelected} = useContext(SiteContext)

    useEffect(() => {
        var selectedNav = document.getElementById(selected)
        selectedNav.classList.add("selected")
      });

    return(
        <div className="Header">
            <div className="CompanyName">
                <div className="name">
                    <h2>Construyendo</h2>
                    <h1>Confianza</h1>
                </div>
                <div className="photos">
                    
                </div>
            </div>
            <div className="logo" onClick={()=>(window.open("/", "_self"))}>
                <Image className="image" src="/logo.png" fill/>
            </div>
            <div className="navBar">
                <Link href="/" id="0" onClick={()=>setSelected(0)}>
                    SOBRE LA EMPRESA
                </Link>
                <Link href="/Projects" id="1" onClick={()=>setSelected(1)}>
                    PROYECTOS
                </Link>
            </div>
        </div>
    );
}

export default Header