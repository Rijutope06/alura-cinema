import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./index.module.css";
import Card from "components/Card";
import { useEffect, useState } from "react";


function Inicio() {
  const [videos, setVideos] = useState([])

  useEffect( () => {
    fetch("https://my-json-server.typicode.com/Rijutope06/alura-cinema-api/videos")
    .then(response => response.json())
    .then(data => {
      setVideos(data)
    })
  }, [])


  return (
    <>
      
      <Banner img="home" color="#154580"></Banner>
      <Titulo>
        <h1>Un lugar para guardas sus videos favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map( (video) => {
            return <Card {...video} key={video.id}/>
        } )}
      </section>

    </>
  );
}

export default Inicio;
