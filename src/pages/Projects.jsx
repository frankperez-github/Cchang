import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import ProjectCard from "@/Components/ProjectCard";

function Projects() {

    const handleClick = (id) =>{
        window.open(`/Project/?id=${id}` , "_self")
    }


    return(
        <>
            <Header />
            <div className="Projects mobContainer">
                
                <ProjectCard imagePath="/projectImage.png" dayDate="21" monthDate="03" yearDate="2022" text="Remodelacion de las oficinas comerciales de Nissan en Cuba" stars="5" reviewsQuant="24" />
                <button onClick={()=>handleClick(1)} className="siteButton extraLarge">Ver Más</button>
               
                <ProjectCard imagePath="/projectImage.png" dayDate="21" monthDate="03" yearDate="2022" text="Remodelacion de las oficinas comerciales de Nissan en Cuba" stars="5" reviewsQuant="24" />
                <button className="siteButton extraLarge">Ver Más</button>

                <ProjectCard imagePath="/projectImage.png" dayDate="21" monthDate="03" yearDate="2022" text="Remodelacion de las oficinas comerciales de Nissan en Cuba" stars="5" reviewsQuant="24" />
                <button className="siteButton extraLarge">Ver Más</button>

                <ProjectCard imagePath="/projectImage.png" dayDate="21" monthDate="03" yearDate="2022" text="Remodelacion de las oficinas comerciales de Nissan en Cuba" stars="5" reviewsQuant="24" />
                <button className="siteButton extraLarge">Ver Más</button>

            </div>
            <Contact />
        </>
    );
}
export default Projects