import { AddShoppingCartOutlined } from '@mui/icons-material'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 20rem;
    width: 20vw;
    min-width: 200px;
    margin: 15px;
    padding: 2rem .8rem;
    align-items: center;
    justify-content: space-between;

    border-radius: 15px;

    img {
        width: 80%;
    }

    box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);

    //Card Animation
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover,
    &:focus,
    &:active {
        -webkit-transform: scale(1.07);
        transform: scale(1.07);
  }
`

export const Title = styled.h3``

export const CartIcon = styled(AddShoppingCartOutlined)`
    color: var(--white);
`