import React, {createContext, useState} from 'react'
import api from '../services/api'

interface AppContextProps {
    getAllFruits: () => Promise<void>
    fruits: FruitsProps[]
    cart: CartProps[]
    addToCart: (id: number, name: string) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
    incrementQuantity: (id: number) => void
    decrementQuantity: (id: number) => void
}

interface FruitsProps {
    name: string
    id: number
}

interface CartProps {
    name: string
    id: number
    quantity: number
}

interface ReactElement {
    children: React.ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export const AppProvider = ({children}: ReactElement) => {
    const [fruits, setFruits] = useState<FruitsProps[]>([])
    const [cart, setCart] = useState<CartProps[]>([])

    const getAllFruits = async () => {
        try{
            const response = await api.get('/all')

            setFruits(response.data)
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const addToCart = (id: number, name: string) => {
        const fruit = cart.find(fruit => fruit.id === id)

        if (fruit) {
        setCart(currItems => {
            const newItems = currItems.map(item => {
            if (item.id === id) {
                return {
                ...item,
                quantity: item.quantity + 1,
                }
            }

            return item
            })

            return newItems
        })
        } else {
        const newCart = [...cart, { id, name, quantity: 1 }]

        setCart(newCart)
        }
    }

    const incrementQuantity = (id: number) => {
        setCart(currItems => {
          const newItems = currItems.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              }
            }
    
            return item
          })
    
          return newItems
        })
    }
    
    const decrementQuantity = (id: number) => {
        setCart(currItems => {
          const newItems = currItems.map(item => {
            if (item.quantity === 1) {
              return item
            }
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              }
            }
    
            return item
          })
    
          return newItems
        })
    }
    
    const removeFromCart = (id: number) => {
        setCart(currItems => {
          const newItems = currItems.filter(item => item.id !== id)
    
          return newItems
        })
    }
    
    const clearCart = () => {
        setCart([])
    }

    return (
        <AppContext.Provider 
            value={{
                getAllFruits, 
                fruits,
                cart,
                addToCart,
                incrementQuantity,
                decrementQuantity,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </AppContext.Provider>  
    )
    }