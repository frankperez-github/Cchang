import { createContext, useState } from "react";


const SiteContext = createContext()

export const SiteContextProvider = ({children})=>{
    
    const [selected, setSelected] = useState(0)
    const projects = [
        {
            "images":["/projectImage.png"],
            "title": "Remodelación de las oficinas comerciales de Nissan en Cuba",
            "day": 21,
            "month": 3,
            "year": 2022,
            "stars": 5,
            "reviews": 24
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