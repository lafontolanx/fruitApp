import { 
    ArrowBackIosRounded, 
    ArrowForwardIosRounded,
    DeleteOutline, 
} from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.5rem;
    margin: 2rem 20vw;
    height: 8rem;
    background: var(--white);

    img {
        height: 15vh;
    }

    border-radius: 15px;

    box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
`

export const Title = styled(Typography)`
    font-family: 'Poppins', sans-serif;
`

export const LeftArea = styled.div`
    display: flex;
    align-items: center;
`

export const RightArea = styled.div`
    display: flex;
    align-items: center;
`  

export const QuantityArea = styled.section`
    display: flex;
    align-items: center;
`

export const QuantityButton = styled(IconButton)``

export const Quantity = styled(Typography)``

export const AddIcon = styled(ArrowForwardIosRounded)``

export const RemoveIcon = styled(ArrowBackIosRounded)``

export const TrashButton = styled(IconButton)``

export const TrashIcon = styled(DeleteOutline)``

