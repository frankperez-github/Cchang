import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import ProjectCard from "@/Components/ProjectCard";
import { useContext } from "react";
import SiteContext from "@/Context/siteContext";

function Projects() {

    const { projects } = useContext(SiteContext)

    const handleClick = (id) =>{
        window.open(`/Project/?id=${id}` , "_self")
    }

    return(
        <>
            <Header />
            <div className="Projects mobContainer">
            {
                projects.map(project => (
                <>
                    <ProjectCard project={project} />
                    <button onClick={()=>handleClick(1)} className="siteButton extraLarge">Ver Más</button>
                </>
                ))
            }
            </div>
            <Contact />
        </>
    );
}
export default Projects