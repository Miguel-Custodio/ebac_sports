import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritarProduto: (state, action: PayloadAction<Produto>) => {
      const products = action.payload

      if (state.favoritos.find((Produto) => Produto.id === products.id)) {
        alert('Item já adicionado')
      } else {
        state.favoritos.push(products)
      }
    }
  }
})

export const { favoritarProduto } = favoritarSlice.actions
export default favoritarSlice.reducer
