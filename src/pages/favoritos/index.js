import Banner from 'components/Banner';
import styles from './favoritos.module.css';
import Titulo from 'components/Titulo';
import { useFavotiosContext } from 'context/Favoritos';
import Card from 'components/Card';

function Favoritos() {
    const { favorito } = useFavotiosContext()
    return (
        <>
            <Banner img="favoritos" color="#154580"></Banner>
            <Titulo>
                <h1>Mis Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map(fav => {
                    return <Card {...fav} key={fav.id} />

                })}
            </section>
        </>
    )
}

export default Favoritos;