import fruitsImage from '../../assets/images/fruits.png';
import { Container, Content } from './styles';

export const Banner = () => {
    return(
        <Container>
            <Content fontSize={30} fontFamily={'Poppins'} fontWeight={700}>Your favorite fruit is just a click away!</Content>
            <img 
                src={fruitsImage} 
                alt='fruits'
                height={200} 
            />            
        </Container>

    )
}
