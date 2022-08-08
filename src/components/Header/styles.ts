import styled from 'styled-components'
import { IconButton, TextField } from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const HeaderComponent = styled.header`
    padding: 1rem 2.5rem;
    background: var(--white);

    a {
        text-decoration: none;
    }

    box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
`

export const Input = styled(TextField)`
    width: 500px;
`

export const Button = styled(IconButton)``

export const Icon = styled(ShoppingCartOutlined)`
    color: var(--gray-50);
`

export const SearchIcon = styled(SearchOutlined)`
    color: var(--gray-50);
`

export const CartArea = styled.section`
    display: flex;
    align-items: center;

    .cart-length {
        color: var(--gray-50);
        font-size: 1.25rem;
        margin-left: 0.25rem;

        font-weight: 500;
        font-family: 'Poppins', sans-serif;
    }
`