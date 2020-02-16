import React, {createContext, useState} from 'react'
const Context=createContext()
export default function ContextProvider({children}) {
    const [state]=useState();
return(
    <Context.Provider value={state}>
        {
            children
        }
    </Context.Provider>
)
}