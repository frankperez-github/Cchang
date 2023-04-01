import ProjectCard from './ProjectCard.jsx'
function Projects(){
    return(
        <div className="Projects mobContainer">
            <h2>Proyectos</h2>
            <ProjectCard text="Remodelación de las oficinas comerciales de Nissan en Cuba" imagePath="/projectImage.png" dayDate="21" monthDate="03" yearDate="2022" stars="5" ratingsQuant="24"/>
            <div className="projectsButtons">
                <button onClick={()=>(window.open(`/Project?id=1` ,"_self"))} className="siteButton shortButton">Ver Más</button>
                <button onClick={()=>(window.open("/Projects" ,"_self"))} className="siteButton largeButton">Otros Proyectos</button>
            </div>
        </div>
    );
}
export default Projects