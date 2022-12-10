import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


export default function MovieSessionPage() {
    const [sessions, setSessions] = useState(undefined);
    const { idFilme } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(URL);
        promise.then((res) => setSessions(res.data));
        promise.catch((err) => console.log(err.response.data));
    }, []);

    if (sessions === undefined) {
        return <Loading><img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' /></Loading>
    }

    return (
        <Container>
            <Subtitle>
                <h2>Selecione o horário</h2>
            </Subtitle>


            {sessions.days.map(session => (
                <Session key={session.id}>
                    <Day>
                        {session.weekday} - {session.date}
                    </Day>
                    {session.showtimes.map(time => (
                        <TimeSection>
                            <Time>{time.name}</Time>
                        </TimeSection>
                    ))}
                </Session>
            ))}

            <Footer>
                <Poster>
                    <img src={sessions.posterURL} alt='poster' />
                </Poster>

                <p>{sessions.title}</p>
            </Footer>


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
const Session = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
const Day = styled.h3`
font-family: Roboto;
font-weight: 400;
font-size: 20px;
margin-left: 20px;
margin-top: 15px;
`
const TimeSection = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-left: 20px;
`
const Time = styled.button`
margin-top: 15px;
width: 83px;
height: 43px;
color: #fff;
font-family: Roboto;
font-weight: 400;
font-size: 20px;
background-color: #E8833A;
border-radius: 3px;
border-style: none;
`
const Footer = styled.div`
margin-top: 10px;
width: 100%;
height: 117px;
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
const Poster =styled.div`
margin-left: 10px;
width: 64px;
height: 89px;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
background-color: #fff;
img{
    margin: 8.5px;
    width: 48px;
    height: 72px;
}
`