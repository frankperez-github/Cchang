import { setIndexConfiguration } from "firebase/firestore";
import { createContext, useState, axios, useEffect } from "react";

const SiteContext = createContext()

export const SiteContextProvider = ({children})=>{
    
    const [selected, setSelected] = useState(0)
    const [projects, setProjects] = useState([])

    
    const fetchProjects = ()=>{
       
        fetch(`http://localhost:5000/projects`)
        .then(res =>res.json())
        .then(json=>{
            setProjects(json)    
        })
    }

    
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
        projects[id-1].reviews.map((review)=>
        {
            if (review === prev && !found)
            {
                const index = projects[id-1].reviews.indexOf(review)
                projects[id-1].reviews[index] = stars
                found = true
            }
        })


        setRating(id, stars, false)
    }
    const [updated, setUpdated]=useState({"id": 0,
    "principalImage":"",
    "secondaryImages":[],
    "title":{},
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
        Put(id)
    }, [updated])
    
    const Put = async(id)=>
    {
        const response = await fetch(`http://localhost:5000/projects/${id}`,
        {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updated)
        })
    }
    const setRating= async (id, stars, New)=>{

        setId(id)
        //calculating rating to project
        var updating = JSON.parse(localStorage.getItem("ratedProjects")).filter((review)=>review.id===id)
        if (updating.length === 0)
        {
            projects[id-1].reviews = [stars, ...projects[id-1].reviews]
        }
        
        var newRating = 0
        projects[id-1].reviews.map(review=>
        {
            newRating+=review
        })
        newRating = newRating / projects[id-1].reviews.length
        projects[id-1].stars = newRating >= 4.7 ? 5 : Math.trunc(newRating)
        

        //Creating new rating to this project
        if(New === true)
        {
            //Storaging rating to this user
            const oldData = JSON.parse(localStorage.getItem("ratedProjects"))
            const newElement = {"id":id, "stars":projects[id-1].stars} 
            localStorage.setItem("ratedProjects", JSON.stringify([newElement,...oldData]))
            New = false
        }

        if(New === false)
        {
            //Updating in database
            setUpdated({"id": id,
            "principalImage":projects[id-1].principalImage,
            "secondaryImages":projects[id-1].secondaryImages,
            "title":projects[id-1].title,
            "category": projects[id-1].category,
            "description":projects[id-1].description,
            "day": projects[id-1].day,
            "month": projects[id-1].month,
            "year": projects[id-1].year,
            "stars": projects[id-1].stars,
            "reviews": projects[id-1].reviews})
        }
    }

    const filter=(category)=>
    {
        var filteredProjects = []
        if(projects.length === 0)
        {
            fetchProjects()
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