import { useContext, useEffect, useState } from 'react'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { FruitCard } from '../../components/FruitCard'
import { Header } from '../../components/Header'
import { AppContext } from '../../context/app'
import { CardArea, Container } from './styles'

export const Home = () => {
    const { getAllFruits, fruits} = useContext(AppContext)
    const [search, setSearch] = useState('')

    const filteredFruits = 
        search.length > 0
        ? fruits.filter(fruit => fruit.name.toLowerCase().includes(search.toLowerCase()))
        : []

    useEffect(() => {
        getAllFruits()
    }, [])

    return (
        <Container>
            <Header setSearch={setSearch}/>

            <Banner />

            <CardArea>
                {search.length > 0
                    ? filteredFruits.map(item => (
                        <FruitCard key={item.id} id={item.id} title={item.name} />
                    ))
                    : fruits.map(item => (
                        <FruitCard key={item.id} id={item.id} title={item.name} />
                    ))
                
                }
            </CardArea>

            <Footer />
            
        </Container>
    )
}