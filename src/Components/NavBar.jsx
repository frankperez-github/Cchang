import Link from "next/link";
import { useContext, useEffect } from "react";
import SiteContext from "@/Context/siteContext";

function NavBar() {
    const {selected, setSelected} = useContext(SiteContext)

    useEffect(() => {
        var prevSelected = document.getElementById((selected+3)%2)
        var selectedNav = document.getElementById(selected)
        prevSelected.classList.remove("selected")
        selectedNav.classList.add("selected")
      }, [selected]);
   return(
        <div className="navBar">
            <Link href="/" id="0" onClick={()=>setSelected(0)}>
                <h2>
                    Sobre la Empresa
                </h2>
            </Link>
            <Link href="/Projects?category=all" id="1" onClick={()=>{setSelected(1)}}>
                <h2>
                    Proyectos
                </h2>
            </Link>
        </div>
   );
}
export default NavBar