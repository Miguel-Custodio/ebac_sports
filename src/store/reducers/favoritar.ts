import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  removerFavoritos: any
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: [],
  removerFavoritos: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritarProduto: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
    }
  }
})

export const { favoritarProduto, removerDosFavoritos } = favoritarSlice.actions
export default favoritarSlice.reducer
