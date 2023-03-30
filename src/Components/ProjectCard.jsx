import Image from "next/image";


function ProjectCard({text, photoPath, dayDate, monthDate, yearDate, stars, ratingsQuant}) {
    return(
        <div className="ProjectCard">
            <Image alt="projectImage" fill src={photoPath} className="image"/>
            <div className="projectInfo">
                <p>{text}</p>
                <div className="projectFooter">
                    <div className="date">
                        {dayDate}-{monthDate}-{yearDate}
                    </div>
                    <div className="rating">
                        {stars}stars
                        ({ratingsQuant})
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard