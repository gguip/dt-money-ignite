import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import useSummary from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'

import * as S from './styles'

const Summary = () => {
  const { income, outcome, total } = useSummary()

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>{priceFormatter.format(outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}

export default Summary
