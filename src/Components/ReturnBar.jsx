import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

function ReturnBar ()
{
    useEffect(()=>
    {
        console.log(window.innerWidth)
    },[])
    return(
        <div className="backArrow">
            <Link href="/" className="arrowAndTitle">
                <div className="backArrowImage">
                    <Image className="image desktopHidden"  alt="logo" fill src="/backArrow.svg"/>
                    <Image className="image mobileHidden" src={ window.innerWidth <= 500 ?"/backArrow.svg" : "/blackBackArrow.svg"} alt="logo" fill/>
                </div>
                <p>Regresar al menú</p>
            </Link>
        </div>
    );
}
export default ReturnBar;
