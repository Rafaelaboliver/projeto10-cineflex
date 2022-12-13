import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CheckoutPage({ sucessInfo }) {
    const { movie, date, time, seats, name, cpf } = { ...sucessInfo }
    console.log('SUCESSO', movie)
    return (
        <Container>
            <Subtitle>
                <h2>Pedido feito com sucesso!</h2>
            </Subtitle>

            <OverallInformation data-test='movie-info'>
                <h2> Filme e sessão</h2>
                <p>
                    {movie}
                </p>
                <p>
                    {date} {time}
                </p>
            </OverallInformation>

            <SeatsInformation data-test='seats-info'>
                <h2>Ingressos</h2>
                
                    {seats.map((selected) => (
                        <p key={selected}>
                           Assento {selected}
                        </p>
                    ))}
                
            </SeatsInformation>

            <UserInformation data-test='client-info'>
                <h2>Comprador</h2>
                <p>
                    Nome: {name}
                </p>
                <p> 
                    CPF: {cpf}
                </p>
            </UserInformation>

            <Link to={'/'}>
            <HomeButtom data-test='go-home-bnt'>
                Voltar pra Home
            </HomeButtom>
            </Link>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;
color: #293845;
`
const Subtitle = styled.div`
width: 180px;
height: 110px;
text-align: center;
h2{
    margin-top: 40px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    color: #247a6b;
}
`
const OverallInformation = styled.div`
width: 100%;
display: flex;
margin-left: 30px;
margin-top: 30px;
flex-direction: column;
justify-content: center;
align-content: center;
h2{
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
}
p{
    margin-top: 10px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 22px;
}
`
const SeatsInformation = styled.div`
width: 100%;
display: flex;
margin-left: 30px;
margin-top: 40px;
flex-direction: column;
justify-content: center;
align-content: center;
h2{
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
}
p{
    margin-top: 8px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 22px;
}
`
const UserInformation = styled.div`
width: 100%;
display: flex;
margin-left: 30px;
margin-top: 40px;
flex-direction: column;
justify-content: center;
align-content: center;
h2{
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
}
p{
    margin-top: 8px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 22px;
}
`
const HomeButtom = styled.button`
width: 225px;
height: 42px;
color: #fff;
font-size: 18px;
font-weight: 400;
font-family: Roboto;
margin-top: 80px;
margin-left: 40px;
border-radius: 3px;
border: 1px solid #e8833a;
background-color: #e8833a;
`