import { Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    background-color: var(--orange);
    padding: 1rem;
    margin: 7rem 0 2rem 0;

    box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
`

export const Content = styled(Typography)`
    width: 30vw;
    color: var(--white);
`