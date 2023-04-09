import { onValue } from "firebase/database";
import { createContext, useState } from "react";
import { db } from "../firebase/firebase"
import { set, ref } from "firebase/database"


const SiteContext = createContext()

export const SiteContextProvider = ({children})=>{
    
    const [selected, setSelected] = useState(0)
    const [projects, setProjects] = useState([])

    const fetchProjects=()=>
    {
        onValue(ref(db), (snapshot)=>{
            const data = snapshot.val();
            if (data !== null)
            {
                Object.values(data).map((project)=>
                {
                    setProjects(project)
                    console.log(projects)
                })
            }
        })
        return projects
    }

    // const projects = [
    //     {
    //         "id": 1,
    //         "principalImage":"/projectImage.png",
    //         "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
    //         "title":{
    //             "keyWords":"Remodelación",
    //             "text": "de las oficinas comerciales de Nissan en Cuba"
    //         },
    //         "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
    //         "category": "clima",
    //         "day": 21,
    //         "month": 3,
    //         "year": 2022,
    //         "stars": 3,
    //         "reviews": [3,4,5,2,1]
    //     },
    //     {
    //         "id": 2,
    //         "principalImage":"/projectImage.png",
    //         "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
    //         "title":{
    //             "keyWords":"Remodelación",
    //             "text": "de las oficinas comerciales de Nissan en Cuba"
    //         },
    //         "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
    //         "category": "clima",
    //         "day": 21,
    //         "month": 3,
    //         "year": 2022,
    //         "stars": 2,
    //         "reviews": [3,4,5,2,1]
    //     },
    //     {
    //         "id": 3,
    //         "principalImage":"/projectImage.png",
    //         "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
    //         "title":{
    //             "keyWords":"Remodelación",
    //             "text": "de las oficinas comerciales de Nissan en Cuba"
    //         },
    //         "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
    //         "category": "refrigeración",
    //         "day": 21,
    //         "month": 3,
    //         "year": 2022,
    //         "stars": 5,           
    //         "reviews": [3,4,5,2,1]
    //     },
    //     {
    //         "id": 4,
    //         "principalImage":"/projectImage.png",
    //         "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
    //         "title":{
    //             "keyWords":"Remodelación",
    //             "text": "de las oficinas comerciales de Nissan en Cuba"
    //         },
    //         "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
    //         "category": "clima",
    //         "day": 21,
    //         "month": 3,
    //         "year": 2022,
    //         "stars": 3,
    //         "reviews": [3,4,5,2,1]
    //     },
    //     {
    //         "id": 5,
    //         "principalImage":"/projectImage.png",
    //         "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
    //         "title":{
    //             "keyWords":"Remodelación",
    //             "text": "de las oficinas comerciales de Nissan en Cuba"
    //         },
    //         "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
    //         "category": "reparaciones",
    //         "day": 21,
    //         "month": 3,
    //         "year": 2022,
    //         "stars": 4,
    //         "reviews": [3,4,5,2,1]
    //     }
    // ]

    
    const updateRating=(id, stars)=>
    {
        var prev = 0
        //Update user's reviews
        var oldData = JSON.parse(localStorage.getItem("ratedProjects"))
        
        oldData.map((rating=>
        {
            if(rating.id === id)
            {
                prev = rating.stars
                oldData[oldData.indexOf(rating)].stars = stars
            }
        }))
        localStorage.setItem("ratedProjects", JSON.stringify(oldData))

        //Update project's review
        var found = false
        projects[id].reviews.map((review)=>
        {
            if (review === prev && !found)
            {
                const index = projects[id].reviews.indexOf(review)
                projects[id].reviews[index] = stars
                found = true
            }
        })


        setRating(id, stars, false)
    }
    const setRating=(id, stars, New)=>{

        //calculating rating to project
        var updating = JSON.parse(localStorage.getItem("ratedProjects")).filter((review)=>review.id===id)
        console.log(updating)
        if (updating.length === 0)
        {
            projects[id].reviews = [stars, ...projects[id].reviews]
        }
        console.log(projects[id].reviews)
        
        var newRating = 0
        projects[id].reviews.map(review=>
        {
            newRating+=review
        })
        newRating = newRating / projects[id].reviews.length
        projects[id].stars = newRating >= 4.7 ? 5 : Math.trunc(newRating)
        

        //Creating new rating to this project
        if(New === true)
        {
            //Storaging rating to this user
            const oldData = JSON.parse(localStorage.getItem("ratedProjects"))
            const newElement = {"id":id, "stars":projects[id].stars} 
            localStorage.setItem("ratedProjects", JSON.stringify([newElement,...oldData]))
            New = false
        }

        if(New === false)
        {
            //Updating in database
            set(ref(db, `/Projects/${id}`),{
                "id": id,
                "principalImage":projects[id].principalImage,
                "secondaryImages":projects[id].secondaryImages,
                "title":projects[id].title,
                "description":projects[id].description,
                "day": projects[id].day,
                "month": projects[id].month,
                "year": projects[id].year,
                "stars": projects[id].stars,
                "reviews": projects[id].reviews
            })
        }
    }

    const filter=(category)=>
    {
        var filteredProjects = []
        projects.map((project)=>
        {
            if(project.category === category)
            {
                filteredProjects = [project, ...filteredProjects]
            }
        })
        return filteredProjects
    }
    
    return(
        <SiteContext.Provider
            value={{
                fetchProjects,
                selected,
                setSelected,
                projects,
                setRating,
                updateRating,
                filter
            }}
        >
            {children}
        </SiteContext.Provider>
    )
}
export default SiteContext