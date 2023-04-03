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
            "day": 21,
            "month": 3,
            "year": 2022,
            "stars": 4,
            "reviews": [3,4,5,2,1]
        }
    ]

    const updateRating=(id, stars)=>{
        var newRating = 0
        projects[id-1].reviews = [stars, ...projects[id-1].reviews]
        projects[id-1].reviews.map(review=>
        {
            newRating+=review
        })
        newRating = newRating / projects[id-1].reviews.length
        projects[id-1].stars = Math.trunc(newRating)
        
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
    
    return(

        <SiteContext.Provider
            value={{
                selected,
                setSelected,
                projects,
                updateRating
            }}
        >
            {children}
        </SiteContext.Provider>
    )
}
export default SiteContext