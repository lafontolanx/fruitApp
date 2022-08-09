import { Modal, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Banner } from '../../components/Banner'
import { ScrollButton }  from '../../components/ScrollButton'
import { FruitCard } from '../../components/FruitCard'
import { Header } from '../../components/Header'
import { AppContext } from '../../context/app'
import { CardArea, Container, ModalArea } from './styles'

export const Home = () => {
    const { getAllFruits, fruits, modal, toggleModal, modalInfo} = useContext(AppContext)
    const [search, setSearch] = useState('')

    const filteredFruits = 
        search.length > 0
        ? fruits.filter(fruit => fruit.name.toLowerCase().includes(search.toLowerCase()))
        : []

    useEffect(() => {
        getAllFruits()
    }, [])

    return (
        <Container>
            <Header setSearch={setSearch}/>

            <Banner />

            <CardArea>
                {search.length > 0
                    ? filteredFruits.map(item => (
                        <FruitCard key={item.id} id={item.id} title={item.name} />
                    ))
                    : fruits.map(item => (
                        <FruitCard key={item.id} id={item.id} title={item.name} />
                    ))
                
                }
            </CardArea>

            <Modal open={modal} onClose={toggleModal}>
                <ModalArea>
                    <Typography fontFamily={'Poppins'} marginBottom={5} className="modal-title">
                        {modalInfo?.name}
                    </Typography>

                    <Typography className="modal-description">
                        <Typography fontFamily={'Poppins'}>
                            Carbohydrates:<br/>
                            Calories:<br/>
                            Fat:<br/>
                            Protein:<br/>
                            Sugar:
                        </Typography>
                        <Typography fontFamily={'Poppins'} textAlign='end'>
                            {modalInfo.nutritions?.carbohydrates}<br/>
                            {modalInfo.nutritions?.calories}<br/>
                            {modalInfo.nutritions?.fat}<br/>
                            {modalInfo.nutritions?.protein}<br/>
                            {modalInfo.nutritions?.sugar}
                        </Typography>
                    </Typography> 
                </ModalArea>
            </Modal>

            <ScrollButton />
            
        </Container>
    )
}