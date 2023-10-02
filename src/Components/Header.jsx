import Image from "next/image";

function Header(){
    return(
        <div className="Header">
            <div className="CompanyName">
                <div className="name">
                    <p>Construyendo</p>
                    <h1>Confianza</h1>
                </div>
                <div className="headerImages">
                    <Image alt="" className="image headerImage" src="/headerImg1.png" fill/>
                    <Image alt="" className="image headerImage" src="/headerImg2.svg" fill/>
                    <Image alt="" className="image headerImage" src="/headerImg3.svg" fill/>
                </div>
            </div>
            <div className="logo" onClick={()=>(window.open("/", "_self"))}>
                <Image alt="" className="image" src="/logo.svg" fill/>
            </div>
            
        </div>
    );
}

export default Header