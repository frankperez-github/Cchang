import { createContext, useState } from "react";


const SiteContext = createContext()

export const SiteContextProvider = ({children})=>{
    
    const [selected, setSelected] = useState(0)
    
    return(

        <SiteContext.Provider
            value={{
                selected,
                setSelected
            }}
        >
            {children}
        </SiteContext.Provider>
    )
}
export default SiteContext