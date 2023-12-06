import { useContext } from 'react'

import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import * as S from './styles'

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </>
  )
}

export default Transactions
