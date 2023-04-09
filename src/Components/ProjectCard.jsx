import Image from "next/image";

function ProjectCard({project}) {
    return(
        project !== undefined &&
        <div className="ProjectCard">
            <Image alt="projectImage" fill src="https://firebasestorage.googleapis.com/v0/b/cchang-app-173ef.appspot.com/o/CS50x.png?alt=media&token=93de42a4-7dc1-4685-8f9b-be5aac5a79af" className="image"/>
            <div className="projectInfo">
                <p>{project.title.keyWords} {project.title.text}</p>
                <div className="projectFooter">
                        <p className="date">{project.day}-{project.month}-{project.year}</p>
                    <div className="reviews reviewsPreview">
                        {
                            [... Array(project.stars).keys()].map((number) =>
                                <Image key={number} className="image" src="/star.png" fill alt="*"/>
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