import Banner from "components/Banner";
import Titulo from "components/Titulo";
import videos from "data/db.json";
import styles from "./index.module.css";
import Card from "components/Card";


function Inicio() {
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
