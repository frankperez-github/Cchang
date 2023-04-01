import Image from "next/image";

function Contact() {
    return(
        <div className="Contact mobContainer">
            <h2>Contacto</h2>
            <div className="networks">
                <Image onClick={()=>(window.open("https://wa.me/+5350262702"))} className="image networkImage" src="/whatsapp.png" fill />
                <Image onClick={()=>(window.open("mailto:reynier.baquero@gmail.com"))} className="image networkImage" src="/mail.png" fill />
                <Image onClick={()=>(window.open("https://www.facebook.com/profile.php?id=100091466821578"))} className="image networkImage" src="/facebook.png" fill />
            </div>

            <textarea placeholder="Díganos su opinión" name="" id="" cols="42" rows="12" />
            <button className="siteButton largeButton">Enviar Mensaje</button>
        </div>
    );
}
export default Contact