import styles from './Card.module.css'
import iconFavorito from './iconfavotio.png'

function Card ( {id, capa, titulo} ) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={iconFavorito} alt='Icono Favorito'/>
        </div>
    )
}

export default Card