import ProjectCard from '../Components/ProjectCard.jsx'
function Projects(){
    return(
        <div className="Projects mobContainer">
            <h2>Proyectos</h2>
            <ProjectCard text="Remodelación de las oficinas comerciales de Nissan en Cuba" photoPath="/next.svg" dayDate="21" monthDate="03" yearDate="2022" stars="5" ratingsQuant="24"/>
            <div className="projectsButtons">
                <button className="siteButton shortButton">Ver Más</button>
                <button className="siteButton largeButton">Otros Proyectos</button>
            </div>
        </div>
    );
}
export default Projects