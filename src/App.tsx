import React from 'react'
import { useDispatch, Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { adicionarAoCarrinho } from './store/reducers/carrinho'
import { favoritarProduto } from './store/reducers/favoritar'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          favoritos={store.getState().favoritar.favoritos}
          adicionarAoCarrinho={(produto: Produto) =>
            dispatch(adicionarAoCarrinho(produto))
          }
          favoritar={(produto: Produto) => dispatch(favoritarProduto(produto))}
        />
      </div>
    </Provider>
  )
}

export default App
