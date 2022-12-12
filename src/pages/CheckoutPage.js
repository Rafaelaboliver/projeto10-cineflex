import styled  from "styled-components";

export default function CheckoutPage () {
    return (
        <Container>
            <Subtitle>
                <h2>Pedido feito com sucesso!</h2>
            </Subtitle>

            <OverallInformation>
                <h2> Filme e sessão</h2>
                <p>
                    nome do Filme escolhido
                    <br/>
                    data e horário da sessão
                </p>
            </OverallInformation>

            <SeatsInformation>
                <h2>Ingressos</h2>
                <p> 
                    assentos escolhidos
                </p>
            </SeatsInformation>

            <UserInformation>
                nome
                cpf
            </UserInformation>
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
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;
h2{
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
}
`
const SeatsInformation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;
h2{
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
}
`
const UserInformation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-content: center;
h2{
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
}
`