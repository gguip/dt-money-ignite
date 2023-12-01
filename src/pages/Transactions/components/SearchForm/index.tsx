import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'
const SearchForm = () => {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder='Busque por transações' />

      <button type='submit'>
        <MagnifyingGlass size={20} />
        Buscar
        </button>
    </S.SearchFormContainer>
  )
}

export default SearchForm