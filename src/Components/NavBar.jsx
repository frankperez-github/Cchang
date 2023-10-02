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
                <h3>
                    Sobre la Empresa
                </h3>
            </Link>
            <Link href="/Projects?category=all" id="1" onClick={()=>{setSelected(1)}}>
                <h3>
                    Proyectos
                </h3>
            </Link>
        </div>
   );
}
export default NavBar