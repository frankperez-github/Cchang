import SiteContext from '@/Context/siteContext.jsx';
import { useContext } from 'react';
import ProjectCard from './ProjectCard.jsx'
function Projects(){

    const { projects } = useContext(SiteContext)

    return(
        projects.length > 0 &&
        <div className="Projects mobContainer">
            <h2 className='desktopHidden'>Proyectos</h2>
            <ProjectCard project={projects[projects.length - 1]}/>
            <div className="projectsButtons">
                <button onClick={()=>(window.open(`/Project?id=${projects[projects.length - 1].id}` ,"_self"))} className="siteButton shortButton">Ver Más</button>
                <button onClick={()=>(window.open("Projects?category=eléctricos" ,"_self"))} className="siteButton largeButton">Otros Proyectos</button>
            </div>
        </div>
    );
}
export default Projects