import styled from "styled-components";

export const Container = styled.div`
    .empty-cart {
        font-size: 1.2rem;
        text-transform: uppercase;
        text-align: center;
        color: var(--gray-50);
        font-family: 'Poppins', sans-serif;
    }
`

export const Content = styled.div`
    height: 80vh;
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;

    a {
        text-decoration: none;
        color: var(--white);
        font-weight: 300;
        text-transform: uppercase;
        background-color: var(--green);
        border-radius: 5px;
        padding: .5rem 1rem;
    }
`