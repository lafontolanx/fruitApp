import { Button, Typography } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartCard } from "../../components/CartCard"
import { Header } from "../../components/Header"
import { AppContext } from "../../context/app"
import { ButtonArea, Container, Content } from "./styles"

export const Cart = () => {
    const { cart, clearCart } = useContext(AppContext)

    const handleClearCart = () => {
        clearCart()
    }

    return (
        <Container>
            <Header setSearch={() => {}}/>

            {cart.map(item => (
                <CartCard 
                    key={item.id} 
                    id={item.id}
                    title={item.name} 
                    quantity={item.quantity}
                />
            ))}

            <ButtonArea>
                {cart.length > 0 && (
                    <Button variant='text' onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                )}

                {cart.length > 0 && (
                    <Link to='/'>Continue shopping</Link>
                )}
            </ButtonArea>

            {cart.length === 0 && (
                <Content>
                     <Typography className='empty-cart'>Empty cart</Typography>
                </Content>
            )}                

        </Container>
    )
}