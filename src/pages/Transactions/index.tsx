
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'

import * as S from './styles'

const Transactions = () => {
  return (
    <>
    <Header />
    <Summary />

    <S.TransactionsContainer>
      <SearchForm />
    <S.TransactionsTable>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <S.PriceHighlight variant='income'>
              R$ 12.000,00
            </S.PriceHighlight>
          </td>
          <td>Venda</td>
          <td>20/02/2022</td>
        </tr>

        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
          <S.PriceHighlight variant='income'>
              R$ 12.000,00
            </S.PriceHighlight>
          </td>
          <td>Venda</td>
          <td>20/02/2022</td>
        </tr>

        <tr>
          <td width="50%">Alimentação</td>
          <td>
            <S.PriceHighlight variant='outcome'>
              - R$ 12.000,00
            </S.PriceHighlight>
          </td>
          <td>Venda</td>
          <td>20/02/2022</td>
        </tr>
      </tbody>
    </S.TransactionsTable>
    </S.TransactionsContainer>
    </>
  )
}

export default Transactions