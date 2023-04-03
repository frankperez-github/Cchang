import Image from "next/image";

function ProjectCard({project}) {
    return(
        <div className="ProjectCard">
            <Image alt="projectImage" fill src={project.principalImage} className="image"/>
            <div className="projectInfo">
                <p>{project.title.keyWords} {project.title.text}</p>
                <div className="projectFooter">
                    <div className="date">
                        {project.day}-{project.month}-{project.year}
                    </div>
                    <div className="reviews reviewsPreview">
                        {
                            [... Array(project.stars).keys()].map((number) =>
                                <Image key={number} className="image" src="/star.png" fill alt="*"/>
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