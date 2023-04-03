import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import ProjectCard from "@/Components/ProjectCard";
import { useContext } from "react";
import SiteContext from "@/Context/siteContext";
import NavBar from "@/Components/NavBar";

function Projects() {

    const { projects } = useContext(SiteContext)

    const handleClick = (id) =>{
        window.open(`/Project/?id=${id}` , "_self")
    }

    return(
        <>
            <Header />
            <div className="mobileHidden">
                <NavBar />
            </div>
            <div className="flex">
                <div className="Projects Carrous mobContainer">
                <Swiper slidesPerView={3} loop={true} navigation={true}  modules={Navigation} className="mySwiper">
                {
                    projects.map(project => (
                        <SwiperSlide key={project.id} className="slide">
                            <div className="slideElement">
                                <ProjectCard project={project} />
                                <button onClick={()=>handleClick(project.id)} className="siteButton extraLarge">Ver Más</button>
                            </div>
                        </SwiperSlide>
                    
                    ))
                }
                </Swiper>

                </div>
                <div className="contact">
                    <Contact />
                </div>
            </div>
        </>
    );
}
export default Projects