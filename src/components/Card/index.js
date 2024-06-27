import { useFavotiosContext } from 'context/Favoritos'
import styles from './Card.module.css'
import iconFavorito from './iconfavotio.png'
import iconNoFavorito from './iconnofavorito.png'

function Card({ id, capa, titulo }) {

    const { favorito, agregarFavorito } = useFavotiosContext();
    const isFavorito = favorito.some(fav => fav.id === id)
    const icon = isFavorito ? iconFavorito : iconNoFavorito

    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img
                src={icon}
                alt='Icono Favorito'
                onClick={() => agregarFavorito({id, capa, titulo})}
            />
        </div>
    )
}

export default Card