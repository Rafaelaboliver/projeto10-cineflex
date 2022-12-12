import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

export default function SeatSelectionPage() {
    const [seatSelection, setSeatSelection] = useState(undefined);
    const [seatNumber, setSeatNumber] = useState([]);
    const [selection, setSelection] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const { idSessao } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(URL);
        promise.then((res) => setSeatSelection(res.data));
        promise.catch((err) => console.log(err.response.data));
    }, []);

    if (seatSelection === undefined) {
        return <Loading><img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    };

    function selectingSeat(props) {
        const newSelection = [...selection, props.id];
        const newSeatNumber = [...seatNumber, props.name]

        //se não incluir o assento, adicionar:
        if (props.isAvailable && !selection.includes(props.id)) {
            setSelection(newSelection);
            setSeatNumber(newSeatNumber);
        };
        //se o assento estiver, caso clicado novamente, remover:
        if (props.isAvailable && selection.includes(props.id)) {
            setSelection(newSelection.filter((selec) => selec !== props.id));
            setSeatNumber(newSeatNumber.filter((seat) => seat !== props.name));
        };
        if (props.isAvailable === false) {
            alert('Esse assento não está disponível');
            newSeatNumber.splice(props.isAvailable)
            newSelection.splice(props.isAvailable);
        };
        console.log('AQUI', newSelection);

    };

    function submitInformation(e) {
        e.preventDefault();
        const submit = { ids: seatNumber, name: name, cpf: cpf };
        const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many';
        const promise = axios.post(URL, submit);

        promise.then(res => {
            console.log('then', res.data) 
            navigate('/sucesso');
        });
        
        promise.catch(err => console.log('err', err.response.data));

        setName('');
        setCPF('');
        console.log('AQUI', submit);
    }

    return (
        <Seats>
            <Subtitle>
                <h2>Selecione o(s) assento(s)</h2>
            </Subtitle>

            <SeatSection>
                {seatSelection.seats.map(seat => (
                    <button
                        key={seat.id}
                        onClick={() => selectingSeat(seat)}
                        className={!seat.isAvailable
                            ? 'unvailable'
                            : selection.includes(seat.id)
                                ? 'selected'
                                : 'available'}
                    >
                        {seat.name}
                    </button>
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

            <form onSubmit={submitInformation}>
                <InputName >
                    <label htmlFor='name'>Nome do comprador:</label>
                    <input
                        id='name'
                        type='text'
                        value={name}
                        placeholder='Digite seu nome...'
                        onChange={e => setName(e.target.value)}
                        required />
                </InputName>
                <InputCPF>
                    <label htmlFor='cpf'>CPF do comprador:</label>
                    <input
                        id='cpf'
                        type='number'
                        value={cpf}
                        placeholder='Digite seu CPF...'
                        onChange={e => setCPF(e.target.value)}
                        required />
                </InputCPF>

                <FinishSelection type='submit'>Reservar assento(s)</FinishSelection>
            </form>

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
button{
    border-radius: 12px;
    margin-left: 13px;
    margin-top: 18px;
    font-size: 11px;
    font-family: Roboto;
    font-weight: 400;
    cursor: pointer;
    color: #000;
    width: 26px;
    height: 26px; 
}

.available{
    background: #c3cfd9;
    border: 1px solid #7b8b99;
}
.unvailable{
    background-color: #fbe192;
    border: 1px solid #f7c52b;
}
.selected{
    background-color: #1aae9e;
    border: 1px solid #0e7d71;
}
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
    border: 1px solid #0e7d71;
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
    border: 1px solid #7b8b99;
    border-radius: 12px;
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
    border: 1px solid #f7c52b;
    border-radius: 12px;
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
display: flex;
flex-direction: column;
input{
    font-size: 18px;
    font-weight: 400;
    font-family: Roboto;
    color: #293845;
    width: 327px;
    height: 51px;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    ::placeholder{
        font-style: italic;
        color: #afafaf;
    }
}

label{
    font-size: 18px;
    font-weight: 400;
    font-family: Roboto;
    color: #293845;
}
`
const InputCPF = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
input{
    font-size: 18px;
    font-weight: 400;
    font-family: Roboto;
    color: #293845;
    width: 327px;
    height: 51px;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    ::placeholder{
        font-style: italic;
        color: #afafaf;
    }
}
label{
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
font-size: 18px;
font-weight: 400;
font-family: Roboto;
margin-top: 60px;
margin-left: 40px;
border-radius: 3px;
border: 1px solid #e8833a;
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
