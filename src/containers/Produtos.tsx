import * as S from './styles'

import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'
import {
  favoritarProduto,
  removerDosFavoritos
} from '../store/reducers/favoritar'
import { adicionarAoCarrinho } from '../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetJogosQuery()
  const dispatch = useDispatch()
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritar.favoritos
  )

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={() => dispatch(favoritarProduto(produto))}
            removerFavoritos={() => dispatch(removerDosFavoritos(produto))}
            aoComprar={() => dispatch(adicionarAoCarrinho(produto))}
            estaNosFavoritos={favoritos.some((f) => f.id === produto.id)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
