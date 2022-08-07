import { Button, Typography } from '@mui/material'
import { CartIcon, Container, Title } from './styles'

interface FruitCardProps {
    title: string
}

export const FruitCard = ({ title }: FruitCardProps) => {
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
            >
                <Typography color={'#fff'}>Add to cart</Typography>
            </Button>
        </Container>
        
    )
}