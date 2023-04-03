import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import ProjectCard from "@/Components/ProjectCard";
import { useContext, useEffect } from "react";
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
                <div className="Projects Carrous mobContainer mobileHidden">
                <Swiper slidesPerView={3}   navigation={true} pagination={true}  modules={[Navigation]} className="mySwiper">
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
                <div className="Projects mobContainer desktopHidden">
                {
                    projects.map(project => (
                            <div key={project.id} className="slideElement">
                                <ProjectCard project={project} />
                                <button onClick={()=>handleClick(project.id)} className="siteButton extraLarge">Ver Más</button>
                            </div>
                    
                    ))
                }

                </div>
                <div className="contact">
                    <Contact />
                </div>
            </div>
        </>
    );
}
export default Projects