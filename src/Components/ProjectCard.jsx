import Image from "next/image";

function ProjectCard({project}) {
    return(
        project !== undefined &&
        <div className="ProjectCard">
            <img alt="projectImage" fill src={project.principalImage} className="image"/>
            <div className="projectInfo">
                <p>{project.title.keyWords} {project.title.text}</p>
                <div className="projectFooter">
                        <p className="date">{project.day}-{project.month}-{project.year}</p>
                    <div className="reviews reviewsPreview">
                        {
                            [... Array(project.stars).keys()].map((number) =>
                                <Image key={number} className="image" src="/Star.png" fill alt="*"/>
                            )
                        }
                        <div className="">
                            <p>({project.reviews.length})</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard