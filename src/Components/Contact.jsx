import Image from "next/image";
import { useEffect } from "react";

function Contact() {

    const sendMessage =()=>
    {
        const message = document.getElementById("message").value
        window.open(`mailto:reynier.baquero@gmail.com?body=${message}`)
    }
    return(
        <div className="Contact mobContainer">
            <h2>Contacto</h2>
            <div className="networks">
                <Image onClick={()=>(window.open("https://wa.me/+5350262702"))} className="image networkImage" src="/whatsapp.png" fill alt=""/>
                <Image onClick={()=>(window.open("mailto:reynier.baquero@gmail.com"))} className="image networkImage" src="/mail.png" fill alt=""/>
                <Image onClick={()=>(window.open("https://www.facebook.com/profile.php?id=100091466821578"))} className="image networkImage" src="/facebook.png" fill alt=""/>
            </div>

            <div id="">
                <textarea id="message" placeholder="Díganos su opinión" name="" cols="42" rows="10" />
                <button onClick={()=>sendMessage()} className="siteButton largeButton">Enviar Mensaje</button>
            </div>
        </div>
    );
}
export default Contact