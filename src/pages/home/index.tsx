import { useContext, useEffect } from 'react'
import { FruitCard } from '../../components/FruitCard'
import { Header } from '../../components/Header'
import { AppContext } from '../../context/app'
import { CardArea, Container } from './styles'

export const Home = () => {
    const { getAllFruits, list} = useContext(AppContext)

    useEffect(() => {
        getAllFruits()
    }, [])

    return (
        <Container>
            <Header />

            <CardArea>
                {list.map(item => (
                    <FruitCard key={item.id} title={item.name} />
                ))}
            </CardArea>
            
        </Container>
    )
}