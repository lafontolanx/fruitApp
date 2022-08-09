import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflow-Y: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   left: 95%;
   bottom: 60px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: var(--green);
`