import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface IstateContext {
    sidebar: boolean
    setSidebar: Dispatch<SetStateAction<boolean>>
}

const initialState = {
    sidebar: false,
    setSidebar: () => false,
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({ children }) => {
    const [sidebar, setSidebar] = useState<boolean>(false)


    return (
        <StateContext.Provider value={{ 
        sidebar, 
        setSidebar}}>
            {children}
        </StateContext.Provider>
    )
}

export const useContextState = () => useContext(StateContext)