import Link from "next/link";
import { useContext, useEffect } from "react";
import SiteContext from "@/Context/siteContext";

function NavBar() {
    const {selected, setSelected} = useContext(SiteContext)

    useEffect(() => {
        var selectedNav = document.getElementById(selected)
        selectedNav.classList.add("selected")
      });
   return(
        <div className="navBar">
            <Link href="/" id="0" onClick={()=>setSelected(0)}>
                SOBRE LA EMPRESA
            </Link>
            <Link href="/Projects" id="1" onClick={()=>setSelected(1)}>
                PROYECTOS
            </Link>
        </div>
   );
}
export default NavBar