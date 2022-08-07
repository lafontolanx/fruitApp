import React, {createContext, useState} from 'react'
import api from '../services/api'

interface AppContextProps {
    getAllFruits: () => Promise<void>
    list: FruitsProps[]
}

interface FruitsProps {
    name: string
}

interface ReactElement {
    children: React.ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export const AppProvider = ({children}: ReactElement) => {
    const [list, setList] = useState([])

    async function getAllFruits() {
        try{
            const response = await api.get('/all')

            setList(response.data)
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <AppContext.Provider 
            value={{
                getAllFruits, 
                list,
            }}
        >
            {children}
        </AppContext.Provider>  
    )
    }