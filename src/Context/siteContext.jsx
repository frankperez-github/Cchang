import { createContext, useState, axios, useEffect } from "react";

const SiteContext = createContext()

export const SiteContextProvider = ({children})=>{
    
    const [selected, setSelected] = useState(0)
    const [projects, setProjects] = useState([])

    const Put = async(id)=>
    {
        if(id !== 0)
        {
            const response = await fetch(`${process.env.SERVER}/projects/${id}`,
            {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updated)
            })
        }
    }
    const fetchProjects = async()=>{
        const res = await fetch(`${process.env.SERVER}/projects`).then(
            response=>response.json()
        ).then(
            data=>{
                setProjects(data)
            }
        )
    }
    
    const updateRating=(id, stars)=>
    {
        setRating(id, stars, false)
    }
    const [updated, setUpdated]=useState({"id": 0,
    "principalImage":"",
    "secondaryImages":[],
    "title":{
        "keyWords":"",
        "text":""
    },
    "category":"",
    "description":"",
    "day": 0,
    "month": 0,
    "year": 0,
    "stars": 0,
    "reviews": []})

    const [id, setId]= useState(0)
    
    useEffect(()=>
    {
        fetchProjects()
        Put(id)
    }, [updated])
    
    
    const setRating= async (id, stars, New)=>{

        const currProject = projects.find((x)=>(x._id === id))
        setId(id)
        
        //calculating rating to project
        var updateRev = JSON.parse(localStorage.getItem("ratedProjects")).filter((x)=>(x.id === id))
        if(updateRev.length === 0)
        {
            currProject.reviews = [stars, ...currProject.reviews]
        }
        
        //Update project's review on db
        if(New === false)
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

            var found = false
            currProject.reviews.map((review)=>
            {
                if (review === prev && !found)
                {
                    const index = currProject.reviews.indexOf(review)
                    currProject.reviews[index] = stars
                    found = true
                }
            })
        }
        var newRating = 0
        currProject.reviews.map(review=>
        {
            newRating+=review
        })
        newRating = newRating / currProject.reviews.length
        currProject.stars = newRating >= 4.7 ? 5 : Math.trunc(newRating)
        

        //Creating new rating to this project
        if(New === true)
        {
            //Storaging rating to this user
            const oldData = JSON.parse(localStorage.getItem("ratedProjects"))
            const newElement = {"id":id, "stars":currProject.stars} 
            localStorage.setItem("ratedProjects", JSON.stringify([newElement,...oldData]))
            New = false
        }
            
        //Updating in database
        setUpdated({"id": id,
        "principalImage":currProject.principalImage,
        "secondaryImages":currProject.secondaryImages,
        "title":currProject.title,
        "category": currProject.category,
        "description":currProject.description,
        "day": currProject.day,
        "month": currProject.month,
        "year": currProject.year,
        "stars": currProject.stars,
        "reviews": currProject.reviews})
    }

    const filter=(category)=>
    {
        var filteredProjects = []
        if(projects.length === 0)
        {
            fetchProjects()
        }
        
        if(category === "all")
        {
            return projects
        } 

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