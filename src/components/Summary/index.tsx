
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import * as S from './styles'

const Summary = () => {
  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
 
        <strong>R$ 1.259,00</strong>
      </S.SummaryCard>

      <S.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 16.141,00</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}

export default Summary