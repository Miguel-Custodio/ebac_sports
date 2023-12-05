import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const { data: produtos, isLoading } = useGetJogosQuery()

  console.log(
    'Props no componete Produtos:',
    favoritos,
    adicionarAoCarrinho,
    favoritar
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
            favoritar={favoritar}
            aoComprar={adicionarAoCarrinho}
            estaNosFavoritos={favoritos.some((f) => f.id === produto.id)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
