import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 850px) {
        width: 100vw;
    }
`

export const CardArea = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const ModalArea = styled.div`
    background: var(--white);
    margin: 40vh 40vw;

    border-radius: 10px;

    padding: 2rem;

    .modal-title {
        color: var(--orange);
        font-size: 1.5rem;
        text-align: center;
        font-weight: 700;
    }

    .modal-description {
        display: flex;
        justify-content: space-between;
    }
`

