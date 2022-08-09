import { Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../../context/app'
import { CartIcon, Container, Title } from './styles'

interface FruitCardProps {
    title: string
    id: number
}

export const FruitCard = ({ title, id }: FruitCardProps) => {
    const { addToCart, getModalInfo, toggleModal } = useContext(AppContext)

    const handleAddToCart = () => {
        addToCart(id, title)
    }

    const handleOpenModal = () => {
        getModalInfo(id)
        toggleModal()
      }

    return (
        <Container>
            <img 
                src={`https://storage.googleapis.com/devfruit/${title.toLowerCase()}.png`}
                alt={title}
                title={title}
            />
            <Title>{title}</Title>

            <Button 
                onClick={handleOpenModal}
                color='error'
                variant='contained'
            >
                <Typography color={'#fff'} fontSize={14}>More info</Typography>
            </Button>

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