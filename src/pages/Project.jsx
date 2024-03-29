import Image from "next/image";
import ReturnBar from "@/Components/ReturnBar";
import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import { useContext, useEffect, useState } from "react";
import SiteContext from "@/Context/siteContext";
import { useRouter } from "next/router";


function Project() {

    const { setRating, updateRating, fetchProjects} = useContext(SiteContext)
    const router = useRouter()
    const {id} = router.query

    const handleReview =(stars)=>{
        if(!localStorage.getItem("ratedProjects"))
        {
            return
        }
        var update = false
        //Update rating
        JSON.parse(localStorage.getItem("ratedProjects")).map((rating)=>
        {
            if(rating.id === id)
            {
                if(window.confirm("Ya usted valoró este proyecto. Desea volver a valorarlo?"))
                {
                    updateRating(id, stars)
                    window.alert("Gracias por su valoración: "+stars+" estrella(s)")
                    update = true
                }
            }
        })
        //New rating
        if(update === false)
        {
            setRating(id, stars, true)
            window.alert("Gracias por su valoración: "+stars+" estrella(s)")
        }
    }
    const [project, setProject] = useState(
        {"_id": 0,
        "principalImage":"",
        "secondaryImages":[],
        "title":{
            "keyWords":"",
            "text": ""
        },
        "day": 0,
        "month": 0,
        "year": 0,
        "stars": 0,
        "reviews": 0}
    )
    
    const fetchProject= async()=>{
        try{
            if(id !== undefined)
            {
                await fetch(`${process.env.SERVER}/projects/${id}`).then(
                    response=>response.json()
                ).then(
                    data=>{
                        setProject(data)
                    }
                )
            }
        }
        catch(err)
        {
            console.log(err.message)
        }
    }

    useEffect(() =>{
        fetchProject()        
    }, [id])  


    return(
        project._id !== 0 ?
        <>
            <div className="mobileHidden">
                <Header />
            </div>
            <ReturnBar />    
            <div className="Project mobContainer desktopHidden">
                <p><b>{project.title[0]}</b> {project.title[1]}</p>
                
                <img className="image projectImage" src={project.principalImage} alt="projectImage" fill/>
                
                <div className="photoFoot">
                    <h2>Explicación</h2>
                    <div className="reviews">
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

                <p>
                    {project.description}
                </p>

                <h2>Otras imágenes</h2>

                <div className="projectImages">
                    {
                        (project.secondaryImages).map((imagePath, index)=>
                            (
                                <img key={index} className="image projectImagePrev" src={imagePath} fill alt="*"/>
                            ))
                        }
                </div>

                <h2>Califica nuestro trabajo</h2>
                <div className="reviews completeReview">
                    <img onClick={()=>(handleReview(1))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <img onClick={()=>(handleReview(2))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <img onClick={()=>(handleReview(3))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <img onClick={()=>(handleReview(4))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    <img onClick={()=>(handleReview(5))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    
                </div>
            </div>
            

            <div className="desktopDistribution mobileHidden">

                <div className="left column">
                    <p><b>{project.title[0]}</b> {project.title[1]}</p>
                    
                    <img className="image projectImage" src={project.principalImage} alt="projectImage" fill/>
                    
                    <div className="photoFoot">
                        <h2>Valoración</h2>
                        <div className="reviews">
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
                <div className="center-left column">
                    <h2>Otras imágenes</h2>

                    <div className="projectImages">
                        {
                            (project.secondaryImages).map((imagePath, index) =>
                                (
                                    <img key={index} className="image projectImagePrev" src={imagePath} fill alt="*"/>
                                ))
                        }
                        
                    </div>
                </div>
                <div className="center-right column">
                    <h2>Explicación</h2>
                    <p>
                        {project.description}
                    </p>
                    <h2>Califica nuestro trabajo</h2>
                    <div className="reviews completeReview">
                        <img onClick={()=>(handleReview(1))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <img onClick={()=>(handleReview(2))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <img onClick={()=>(handleReview(3))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <img onClick={()=>(handleReview(4))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                        <img onClick={()=>(handleReview(5))} className="image completeStar" src="/emptyStar.png" fill alt="*"/>
                    </div>
                </div>
                <div className="right column projectContact">
                    <Contact />
                </div>
            </div>
        </>
        : 
        <h1>Loading Project ...</h1>
    );
}
export default Project