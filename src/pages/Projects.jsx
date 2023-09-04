import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import ProjectCard from "@/Components/ProjectCard";
import { useContext, useEffect, useState } from "react";
import SiteContext from "@/Context/siteContext";
import NavBar from "@/Components/NavBar";
import { useRouter } from "next/router";
import Link from "next/link";


function Projects() {
    const router = useRouter()

    const { setSelected, filter, projects } = useContext(SiteContext)

    const handleClick = (id) =>{
        window.open(`/Project/?id=${id}` , "_self")
    }

    const { category } = router.query
    const [Projects, setProjects] = useState([])
    const [categ, setcateg] = useState("all")
    const [electrics, setElectrics] = useState("/disabledElectr.png")
    const [airs, setAirs] = useState("/disabledIce.png")
    const [reparations, setReparations] = useState("/disabledRepar.png")


    const updateCategIcon=()=>
    {
        if(categ === "eléctricos")
        {
            setElectrics("/enabledElectr.png")
            setAirs ("/disabledIce.png")
            setReparations("/disabledRepar.png")
        }
        else if(categ === "clima")
        {
            setElectrics("/disabledElectr.png")
            setAirs("/enabledIce.png")
            setReparations("/disabledRepar.png")
        }
        else if(categ === "reparaciones")
        {
            setElectrics("/disabledElectr.png")
            setAirs("/disabledIce.png")
            setReparations("/enabledRepar.png")
        }
        else if (categ === "all")
        {
            setElectrics("/enabledElectr.png")
            setAirs("/enabledIce.png")
            setReparations("/enabledRepar.png")
        }
    }

    useEffect(()=>{
        updateCategIcon()
        setProjects(filter(categ))
        setSelected(1)
    }, [category])


    return(
        <>
            <Header />
            <NavBar />

            <div className="categoriesIcons">
                <Link className="categImage" onClick={()=>(setcateg("eléctricos"), updateCategIcon())} href={`/Projects?category=eléctricos`}>
                    <Image src={electrics} className="image" alt="" fill />
                </Link>
                <Link className="categImage" onClick={()=>(setcateg("clima"), updateCategIcon())} href={`/Projects?category=clima`}>
                    <Image src={airs} className="image" alt="" fill />
                </Link>
                <Link className="categImage" onClick={()=>(setcateg("reparaciones"), updateCategIcon())} href={`/Projects?category=reparaciones`}>
                    <Image src={reparations} className="image" alt="" fill />
                </Link>
            </div>
            
            <div className="flex">
                <div className="Projects Carrous mobContainer mobileHidden">
                <Swiper slidesPerView={3}   navigation={true} pagination={true}  modules={[Navigation]} className="mySwiper">
                {
                    Projects.map(project => (
                        console.log(project),
                        <SwiperSlide key={project._id} className="slide">
                            <div className="slideElement" key={project._id}>
                                <ProjectCard project={project} />
                                <button onClick={()=>handleClick(project._id)} className="siteButton extraLarge">Ver Más</button>
                            </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>

                </div>
                <div className="Projects mobContainer desktopHidden">
                {
                    Projects.map(project => (
                            <div key={project._id} className="slideElement">
                                <ProjectCard project={project} />
                                <button onClick={()=>handleClick(project._id)} className="siteButton extraLarge">Ver Más</button>
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