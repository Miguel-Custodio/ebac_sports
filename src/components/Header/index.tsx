import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const carrinhoItens = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const valorTotal = carrinhoItens.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{carrinhoItens.length} favoritos</span>
        <img src={cesta} alt="Cesta de Compras" />
        <span>
          {carrinhoItens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
