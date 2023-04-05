import { createContext, useState } from "react";


const SiteContext = createContext()

export const SiteContextProvider = ({children})=>{
    
    const [selected, setSelected] = useState(0)

    const projects = [
        {
            "id": 1,
            "principalImage":"/projectImage.png",
            "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
            "title":{
                "keyWords":"Remodelación",
                "text": "de las oficinas comerciales de Nissan en Cuba"
            },
            "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
            "category": "clima",
            "day": 21,
            "month": 3,
            "year": 2022,
            "stars": 3,
            "reviews": [3,4,5,2,1]
        },
        {
            "id": 2,
            "principalImage":"/projectImage.png",
            "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
            "title":{
                "keyWords":"Remodelación",
                "text": "de las oficinas comerciales de Nissan en Cuba"
            },
            "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
            "category": "clima",
            "day": 21,
            "month": 3,
            "year": 2022,
            "stars": 2,
            "reviews": [3,4,5,2,1]
        },
        {
            "id": 3,
            "principalImage":"/projectImage.png",
            "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
            "title":{
                "keyWords":"Remodelación",
                "text": "de las oficinas comerciales de Nissan en Cuba"
            },
            "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
            "category": "refrigeración",
            "day": 21,
            "month": 3,
            "year": 2022,
            "stars": 5,           
            "reviews": [3,4,5,2,1]
        },
        {
            "id": 4,
            "principalImage":"/projectImage.png",
            "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
            "title":{
                "keyWords":"Remodelación",
                "text": "de las oficinas comerciales de Nissan en Cuba"
            },
            "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
            "category": "clima",
            "day": 21,
            "month": 3,
            "year": 2022,
            "stars": 3,
            "reviews": [3,4,5,2,1]
        },
        {
            "id": 5,
            "principalImage":"/projectImage.png",
            "secondaryImages":[ "/projectImage1.png","/projectImage1.png","/projectImage1.png","/projectImage1.png"],
            "title":{
                "keyWords":"Remodelación",
                "text": "de las oficinas comerciales de Nissan en Cuba"
            },
            "description":"Construir, reparar y mantener infraestructuras, así como instalar y sostener sistemas eléctricos y de refrigeración y clima, garantizando calidad y confort; con un personal competente y comprometido con satisfacer las exigencias de los clientes",
            "category": "reparaciones",
            "day": 21,
            "month": 3,
            "year": 2022,
            "stars": 4,
            "reviews": [3,4,5,2,1]
        }
    ]

    const ratedProjects = [
        {
            "id": 0,
            "stars": 0
        }
    ]
    const updateRating=(id, stars)=>
    {
        var oldRating = {"id":id, "stars":0}
        var updatedRatings = []
        JSON.parse(localStorage.getItem("ratedProjects")).map((rating=>
        {
            if(rating.id === id)
            {
                oldRating = rating
                oldRating.stars = stars
                updatedRatings = [oldRating, ...updatedRatings]
            }
            else
            {
                updatedRatings = [rating, ...updatedRatings]
            }
        }))
        localStorage.setItem("ratedProjects", JSON.stringify(updatedRatings))
        setRating(id, stars, false)
    }
    const setRating=(id, stars, New)=>{
        if(New === true)
        {
            //calculating rating to project
            var newRating = 0
            projects[id-1].reviews = [stars, ...projects[id-1].reviews]
            projects[id-1].reviews.map(review=>
            {
                newRating+=review
            })
            newRating = newRating / projects[id-1].reviews.length
            projects[id-1].stars = newRating >= 4.7 ? 5 : Math.trunc(newRating)
            
            //Storaging rating to this user
            const oldData = JSON.parse(localStorage.getItem("ratedProjects"))
            console.log("antes"+oldData)
            const newElement = {"id":id, "stars":projects[id-1].stars} 
            localStorage.setItem("ratedProjects", JSON.stringify([newElement,...oldData]))
            New = false
        }
        if(New === false)
        {
            //changing project propierties
            var newProject={
                "id": id,
                "principalImage":projects[id-1].principalImage,
                "secondaryImages":projects[id-1].secondaryImages,
                "title":projects[id-1].title,
                "description":projects[id-1].description,
                "day": projects[id-1].day,
                "month": projects[id-1].month,
                "year": projects[id-1].year,
                "stars": projects[id-1].stars,
                "reviews": projects[id-1].reviews
            } //From here is ready to update project {id}
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