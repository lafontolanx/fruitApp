import { Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../../context/app'
import { CartIcon, Container, Title } from './styles'

interface FruitCardProps {
    title: string
    id: number
}

export const FruitCard = ({ title, id }: FruitCardProps) => {
    const { addToCart } = useContext(AppContext)

    const handleAddToCart = () => {
        addToCart(id, title)
    }

    return (
        <Container>
            <img 
                src={`https://storage.googleapis.com/devfruit/fruit/${title.toLowerCase()}.jpg`}
                alt={title}
                title={title}
            />
            <Title>{title}</Title>

            <Button 
                color='success' 
                variant='contained'
                endIcon={<CartIcon/>}
                onClick={handleAddToCart}
            >
                <Typography color={'#fff'}>Add to cart</Typography>
            </Button>
        </Container>
        
    )
}