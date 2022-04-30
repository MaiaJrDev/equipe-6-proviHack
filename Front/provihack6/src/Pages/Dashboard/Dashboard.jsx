import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { GridStatus, H2Styled, H3Styled, Image, MainStyle, Paragraph, PointStyled, PStyled } from "./styled";
import BikeImg from '../../assests/bike-riding.png'

export default function Dashboard() {
    return (
        <MainStyle>
            <Header name={"Dashboard"} />
            <H2Styled>Pontuação</H2Styled>
            <PointStyled>
                <Paragraph>45</Paragraph>
            </PointStyled>
            <H2Styled>Status</H2Styled>
            <GridStatus>
                <H3Styled>CO2/Kg</H3Styled>
                <H3Styled>Km</H3Styled>
                <H3Styled>Gás</H3Styled>
                <PStyled>20kg</PStyled>
                <PStyled>30km</PStyled>
                <PStyled>50L</PStyled>
            </GridStatus>
            <Image src={BikeImg} alt="Pessoa andando de bicicleta" />

            <Navbar isHome="true" />
        </MainStyle>
    )
};