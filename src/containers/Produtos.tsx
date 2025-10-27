import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

const ProdutosComponent = ({ produtos }: { produtos: ProdutoType[] }) => {
  const favoritos = useSelector((state: RootReducer) => state.favoritar.items)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      ))}
    </S.Produtos>
  )
}
export default ProdutosComponent
