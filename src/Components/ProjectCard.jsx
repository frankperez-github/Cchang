import Image from "next/image";

function ProjectCard({project}) {
    return(
        <div className="ProjectCard">
            <Image alt="projectImage" fill src={project.images[0]} className="image"/>
            <div className="projectInfo">
                <p>{project.title}</p>
                <div className="projectFooter">
                    <div className="date">
                        {project.day}-{project.month}-{project.year}
                    </div>
                    <div className="reviews reviewsPreview">
                        {
                            [... Array(project.stars).keys()].map(() =>
                                <Image className="image" src="/star.png" fill alt="*"/>
                            )
                        }
                        <div className="">
                            <p>({project.reviews})</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard