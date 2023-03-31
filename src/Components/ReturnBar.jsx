import Link from "next/link";
import Image from "next/image";

function ReturnBar ()
{
    return(
        <div className="backArrow">
            <Link href="/" className="arrowAndTitle">
                <div className="backArrowImage">
                    <Image className="image" src="/backArrow.svg" alt="logo" fill/>
                </div>
                <p>Regresar al menú</p>
            </Link>
        </div>
    );
}
export default ReturnBar;
