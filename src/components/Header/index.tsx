import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logotipo from '../../assets/icons/logotipo.svg'
import { AppContext } from '../../context/app'
import { 
    HeaderComponent,  
    Input,  
    Icon, 
    SearchIcon, 
    CartArea
} from "./styles"

interface HeaderProps {
    setSearch: (value: string) => void
}

export const Header = ({ setSearch }: HeaderProps) => {
    const { cart } = useContext(AppContext)

    return (
        <HeaderComponent>
            <Stack direction={'row'} spacing={3} justifyContent={'space-between'} alignItems={'center'}>
                <Link to='/'><img src={Logotipo} alt="devFruit logo" /></Link>

                <Input 
                    placeholder="Search fruit"
                    InputProps={{ endAdornment: <SearchIcon />}}
                    size='small'
                    color='success'
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Link to='/cart'>
                    <CartArea>
                        <Icon />
                        <Typography className='cart-length'>{cart.length}</Typography>
                    </CartArea>
                </Link>
            </Stack>
        </HeaderComponent>
    )
}