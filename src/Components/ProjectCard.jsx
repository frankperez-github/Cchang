import Image from "next/image";

function ProjectCard({text, imagePath, dayDate, monthDate, yearDate, stars, reviewsQuant}) {
    return(
        <div className="ProjectCard">
            <Image alt="projectImage" fill src={imagePath} className="image"/>
            <div className="projectInfo">
                <p>{text}</p>
                <div className="projectFooter">
                    <div className="date">
                        {dayDate}-{monthDate}-{yearDate}
                    </div>
                    <div className="rating">
                        {stars}stars
                        ({reviewsQuant})
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard