import { createContext, useState, useEffect } from 'react'

export const ConfigContext = createContext();

export const ConfigContextProvider = ({children}) => {

    const [saved, setSaved] = useState([])
    const [selected, setSelected] = useState(null)

      useEffect(()=>{
        const savedConfig = localStorage.getItem("savedConfig");
        if(savedConfig){ 
            setSaved(JSON.parse(savedConfig))
        }
      },[])
    
      useEffect(()=>{
          localStorage.setItem("savedConfig", JSON.stringify(saved))
      });

    return(
        <ConfigContext.Provider value = {{saved, setSaved, selected, setSelected}}>
            { children }
        </ConfigContext.Provider>
    );
}