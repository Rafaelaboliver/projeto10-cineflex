import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

export default function SeatSelectionPage() {
    const [seatSelection, setSeatSelection] = useState(undefined);
    const { idSessao } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(URL);
        promise.then((res) => setSeatSelection(res.data));
        promise.catch((err) => console.log(err.response.data));
    }, []);

    if (seatSelection === undefined) {
        return <Loading><img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    }

    return (
        <Seats>
            <Subtitle>
                <h2>Selecione o(s) assento(s)</h2>
            </Subtitle>

            <SeatSection>
                {seatSelection.seats.map(seat => (
                    <SeatSelection key={seat.id}>
                        {seat.name}
                    </SeatSelection>
                ))}
            </SeatSection>

            <SeatsTemplate>
                <SelectedSeat>
                    <button></button>
                    <p>Selecionado</p>
                </SelectedSeat>

                <AvailableSeat>
                    <button></button>
                    <p>Disponível</p>
                </AvailableSeat>

                <UnvailableSeat>
                    <button></button>
                    <p>Indisponível</p>
                </UnvailableSeat>
            </SeatsTemplate>

            <form>
                <InputName>
                    <p>Nome do comprador:</p>
                    <input type='text' placeholder='Digite seu nome...' required />
                </InputName>
                <InputCPF>
                    <p>CPF do comprador:</p>
                    <input type='number' placeholder='Digite seu CPF...' required />
                </InputCPF>
            </form>

            <FinishSelection>Reservar assento(s)</FinishSelection>

            <Footer>
                <Poster>
                    <img src={seatSelection.movie.posterURL} alt='poster' />
                </Poster>

                <p>
                    {seatSelection.movie.title}
                    <br />
                    {seatSelection.day.weekday} - {seatSelection.name}
                </p>
            </Footer>
        </Seats>
    )
}

const Seats = styled.div`
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
const Loading = styled.div`
margin: 0 auto;
width: 800px;
height: 800px;
`
const SeatSection = styled.div`
max-width: 400px;
display: flex;
flex-wrap: wrap;
`
const SeatSelection = styled.button`
background-color: #c3cfd9;
border-color: #808f9d;
border-style: solid;
border-radius: 12px;
border-width: 1px;
margin-left: 13px;
margin-top: 18px;
font-size: 11px;
font-family: Roboto;
font-weight: 400;
cursor: pointer;
color: #000;
width: 26px;
height: 26px;
`
const SeatsTemplate = styled.div`
display: flex;
margin-top: 20px;
width: 300px;
justify-content: space-between;
`
const SelectedSeat = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
    width: 26px;
    height: 26px;
    background-color: #1aae9e;
    border-radius: 12px;
    border-color: #0e7d71;
    border-style: solid;
    border-width: 1px;
}
p{
    margin-top: 5px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 13px;
    color: #4e5a65;
}
`
const AvailableSeat = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
    width: 26px;
    height: 26px;
    background-color: #c3cfd9;
    border-color: #7b8b99;
    border-radius: 12px;
    border-style: solid;
    border-width: 1px;
}
p{
    margin-top: 5px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 13px;
    color: #4e5a65;
}
`
const UnvailableSeat = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
    width: 26px;
    height: 26px;
    background-color: #fbe192;
    border-color: #f7c52b;
    border-radius: 12px;
    border-style: solid;
    border-width: 1px;
}
p{
    margin-top: 5px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 13px;
    color: #4e5a65;
}
`
const InputName = styled.div`
margin-top: 40px;
input{
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    font-family: Roboto;
    color: #afafaf;
    width: 327px;
    height: 51px;
    border-color: #d4d4d4;
    border-style: solid;
    border-radius: 3px;
    border-width: 1px;
}
p{
    font-size: 18px;
    font-weight: 400;
    font-family: Roboto;
    color: #293845;
}
`
const InputCPF = styled.div`
margin-top: 10px;
input{
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    font-family: Roboto;
    color: #afafaf;
    width: 327px;
    height: 51px;
    border-color: #d4d4d4;
    border-style: solid;
    border-radius: 3px;
    border-width: 1px;
}
p{
    font-size: 18px;
    font-weight: 400;
    font-family: Roboto;
    color: #293845;
}
`
const Footer = styled.div`
margin-top: 15px;
width: 100%;
height: 120px;
display: flex;
flex-direction: row;
background-color:  #dfe6ed;
outline-color: #9eadba;
outline-style: solid;
outline-width: 1px;
align-items: center;
p{
    font-family: Roboto;
    font-size: 26px;
    font-weight: 400;
    color: #293845;
    margin-left: 14px;
}
`
const FinishSelection = styled.button`
width: 225px;
height: 42px;
color: #fff;
margin: auto;
font-size: 18px;
font-weight: 400;
font-family: Roboto;
margin-top: 60px;
border-width: 1px;
border-radius: 3px;
border-style: solid;
border-color: #e8833a;
background-color: #e8833a;

`
const Poster = styled.div`
margin-left: 10px;
width: 64px;
height: 89px;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
background-color: #fff;
img{
    margin: 7.5px;
    width: 50px;
    height: 75px;
}
`