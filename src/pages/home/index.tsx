import { Button, Typography } from "@mui/material"
import { useContext, useEffect } from "react"
import { Header } from "../../components/Header"
import { AppContext } from "../../context/app"
import { Container } from "./styles"

export const Home = () => {
    const { getAllFruits, list} = useContext(AppContext)

    useEffect(() => {
        getAllFruits()
    }, [])

    return (
        <Container>
            <Header />

            {list.map(item => (
                <Typography key={item.name}>{item?.name}</Typography>
            ))}
            
        </Container>
    )
}