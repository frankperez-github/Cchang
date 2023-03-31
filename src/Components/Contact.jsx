import Image from "next/image";

function Contact() {
    return(
        <div className="Contact mobContainer">
            <h2>Contacto</h2>
            <p>whatsapp</p>
            <p>mail</p>
            <p>facebook</p>

            <textarea placeholder="Díganos su opinión" name="" id="" cols="42" rows="12" />
            <button className="siteButton largeButton">Enviar Mensaje</button>
        </div>
    );
}
export default Contact