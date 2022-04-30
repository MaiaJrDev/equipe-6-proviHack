import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Navbar from "../../components/Navbar/Navbar";
import RadioButton from "../../components/RadioButton/RadioButton";
import {Title, SubTitle, MainDiv} from './styled'


export default function LocationPage(){
    return(
        <>
        <Header name={'Localização'}/>
        <Title>Sua Rota</Title>
        <RadioButton />
        <Map />
        <Navbar />
        </>
    )
}