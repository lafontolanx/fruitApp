import styled from 'styled-components'
import { IconButton, TextField } from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const HeaderComponent = styled.header`
    padding: 1.5rem 2.5rem;
`

export const Logo = styled.h1``

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