import styled  from "styled-components";

export default function MovieSessionPage () {
    return (
        <Container>
            <Subtitle>
                <h2>Selecione o horário</h2>
            </Subtitle>
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
`
const Subtitle = styled.div`
width: 100%;
height: 110px;
text-align: center;
h2{
    margin-top: 40px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 24px;
}
`