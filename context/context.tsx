import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface IstateContext {
    sidebar: boolean
    setSidebar: Dispatch<SetStateAction<boolean>>
    userSidebar: boolean
    setUserSidebar: Dispatch<SetStateAction<boolean>>
    setScreenSize: Dispatch<SetStateAction<undefined|number>>
    screenSize: undefined|number
    activeSidebarLink: string
    setActiveSidebarLink: Dispatch<SetStateAction<string>>
}

const initialState = {
    sidebar: false,
    setSidebar: () => false,
    userSidebar: false,
    setUserSidebar: () => false,
    setScreenSize: () => undefined,
    screenSize: undefined,
    activeSidebarLink: "Dashboard",
    setActiveSidebarLink: () => "Dashboard"
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({ children }) => {
    const [sidebar, setSidebar] = useState<boolean>(false)
    const [userSidebar, setUserSidebar] = useState<boolean>(false)
    const [screenSize, setScreenSize] = useState<undefined|number>(undefined)
    const [activeSidebarLink, setActiveSidebarLink] = useState<string>("Dashboard")


    return (
        <StateContext.Provider value={{ 
        sidebar, 
            setSidebar, setUserSidebar, userSidebar, screenSize, setScreenSize, activeSidebarLink, setActiveSidebarLink }}>
            {children}
        </StateContext.Provider>
    )
}

export const useContextState = () => useContext(StateContext)