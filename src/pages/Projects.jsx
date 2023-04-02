import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import ProjectCard from "@/Components/ProjectCard";
import { useContext } from "react";
import SiteContext from "@/Context/siteContext";

function Projects() {

    const { projects } = useContext(SiteContext)

    const handleClick = (id) =>{
        window.open(`/Project/?id=${id}` , "_self")
    }

    return(
        <>
            <Header />
            <div className="flex">
                <div className="Projects Carrus mobContainer">
                <Swiper slidesPerView={3} loop={true} navigation={true}  modules={[Pagination, Navigation]} className="mySwiper">
                {
                    projects.map(project => (
                        <SwiperSlide key={project.id} className="slide">
                            <div className="slideElement">
                                <ProjectCard project={project} />
                                <button onClick={()=>handleClick(1)} className="siteButton extraLarge">Ver Más</button>
                            </div>
                        </SwiperSlide>
                    
                    ))
                }
                </Swiper>

                </div>
                <div className="">
                    <Contact />
                </div>
            </div>
        </>
    );
}
export default Projects