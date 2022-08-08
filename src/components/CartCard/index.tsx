import { useContext } from 'react'
import { AppContext } from '../../context/app'
import { 
    AddIcon,
    Container, 
    LeftArea, 
    Quantity, 
    QuantityArea, 
    QuantityButton, 
    RemoveIcon, 
    RightArea, 
    Title, 
    TrashButton,
    TrashIcon
} from './styles'

interface CartCardProps {
    title: string
    quantity: number
    id: number
}

export const CartCard = ({ title, quantity, id }: CartCardProps) => {
    const { incrementQuantity, decrementQuantity, removeFromCart } = useContext(AppContext)

    const handleIncrement = () => {
        incrementQuantity(id)
    }

    const handleDecrement = () => {
        decrementQuantity(id)
    }

    const handleRemove = () => {
        removeFromCart(id)
    }

    return (
        <Container>
                <LeftArea>
                    <img 
                        src={`https://storage.googleapis.com/devfruit/${title.toLowerCase()}.png`}
                        alt={title}
                        title={title}
                    />
                    <Title marginLeft={5} fontFamily={'Poppins'}>{title}</Title>                
                </LeftArea>

                <RightArea>
                    <QuantityArea>

                        <QuantityButton onClick={handleDecrement}>
                            <RemoveIcon />
                        </QuantityButton>

                            <Quantity fontFamily={'Poppins'}>{quantity}</Quantity>

                        <QuantityButton onClick={handleIncrement}>
                            <AddIcon />
                        </QuantityButton>

                    </QuantityArea>

                    <TrashButton onClick={handleRemove}>
                        <TrashIcon />
                    </TrashButton>                
                </RightArea>    
        </Container>

    )
}