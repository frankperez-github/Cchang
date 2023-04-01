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
                    <div className="reviews reviewsPreview">
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <Image className="image" src="/star.png" fill alt="*"/>
                        <div className="">
                            <p>(24)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard