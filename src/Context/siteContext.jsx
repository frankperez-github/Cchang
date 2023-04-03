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
            "stars": 0,
            "reviews": 0
        },{
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
            "stars": 0,
            "reviews": 0
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
            "stars": 0,
            "reviews": 0
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
            "stars": 0,
            "reviews": 0
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
            "stars": 0,
            "reviews": 0
        }
    ]
    
    return(

        <SiteContext.Provider
            value={{
                selected,
                setSelected,
                projects
            }}
        >
            {children}
        </SiteContext.Provider>
    )
}
export default SiteContext