import Image from "next/image";

function Header(){

    

    return(
        <div className="Header">
            <div className="CompanyName">
                <div className="name">
                    <h2>Construyendo</h2>
                    <h1>Confianza</h1>
                </div>
                <div className="headerImages">
                    <Image className="image headerImage" src="/headerImg1.png" fill/>
                    <Image className="image headerImage" src="/headerImg2.png" fill/>
                    <Image className="image headerImage" src="/headerImg3.png" fill/>
                </div>
            </div>
            <div className="logo" onClick={()=>(window.open("/", "_self"))}>
                <Image className="image" src="/logo.png" fill/>
            </div>
            
        </div>
    );
}

export default Header