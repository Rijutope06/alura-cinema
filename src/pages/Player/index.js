import Banner from 'components/Banner';
import styles from './player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import videos from 'data/db.json';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';

function Player() {
    
    const parametros = useParams();
    const [video, setVideo] = useState([])
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Rijutope06/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data)
        })
    },[]);

    //const video = videos.find(video => video.id === Number(parametros.id));
    console.log(video);
    
    if (!video) return <NotFound />
    
    return (
        <>
            <Banner img='player' color='#58b9ae'>
            </Banner>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className='styles.container'>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    allowfullscreen
                    title={video.titulo}
                    >
                </iframe>
                <p>{video.titulo}</p>
            </section>
        </>
    )
}

export default Player