import { useSelector } from 'react-redux'
import { useGetJogosQuery } from '../services/api'
import { RootReducer } from '../store'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading, isError } = useGetJogosQuery()

  const favoritos = useSelector((state: RootReducer) => state.favoritar.items)

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((f) => f.id === produto.id)

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (isError) {
    return <p>Erro ao carregar produtos 😢</p>
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
