import { Children, createContext, useContext, useState } from "react";

export const Favoritoscontext = createContext()

Favoritoscontext.displayName = 'Favoritos'

export default function FavoritoProvider({ children }) {
  const [favorito, setFavorito] = useState([])

  return <Favoritoscontext.Provider value={{ favorito, setFavorito }} >
    {children}
  </Favoritoscontext.Provider>
}

export function useFavotiosContext() {
  const { favorito, setFavorito } = useContext(Favoritoscontext)

  function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some((item) => item.id === nuevoFavorito.id)
    let nuevaLista = [...favorito]
    if (!favoritoRepetido) {
      nuevaLista.push(nuevoFavorito)
      return setFavorito(nuevaLista)
    }
    nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id)
    return setFavorito(nuevaLista)
  }
  return {
    favorito,
    agregarFavorito
  }
}