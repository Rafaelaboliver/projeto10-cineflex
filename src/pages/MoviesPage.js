import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function MoviesPage() {
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';
        const promise = axios.get(URL);
        promise.then((res) => setMovies(res.data));
        promise.catch((err) => console.log(err.response.data))
    }, []);

    if (movies === undefined) {
        return <Loading><img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880'/></Loading> 
    }

    return (
        <Container>
            <Subtitle>
                <h2>Selecione o filme</h2>
            </Subtitle>
            <Movies>
                {movies.map(movie => (
                    <MovieImage key={movie.id}>
                        <Link to={`/sessoes/${movie.id}`}>
                            <img src={movie.posterURL} />
                        </Link>
                    </MovieImage>
                ))}
            </Movies>
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

const Movies = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`

const MovieImage = styled.div`
width: 145px;
height: 209px;
margin: 0 auto;
margin-top: 10px;
cursor: pointer;
border-radius: 3px;
background-color: #fff;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

img{
    margin: 8px;
    width: 129px;
    height: 193px;
}

`
const Loading = styled.div`
margin: 0 auto;
width: 800px;
height: 800px;
`