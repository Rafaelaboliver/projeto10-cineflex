import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviesPage() {
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';
        const promise = axios.get(URL);
        promise.then((res) => setMovies(res.data));
        promise.catch((err) => console.log(err.response.data))
    }, []);

    if (movies === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <Container>
            <Movies>
                    {movies.map(movie => (
                        <MovieImage key={movie.id}>
                            <img src={movie.posterURL} />
                        </MovieImage>
                    ))}
            </Movies>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
align-content: center;
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