import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as S from './styles'

const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
    <S.Overlay />

    <S.Content>
      <Dialog.Title>Nova transação</Dialog.Title>

      <S.CloseButton>
        <X size={24} />
      </S.CloseButton>

      <form action="">
        <input type="text" placeholder='Descricão' required />
        <input type="number" placeholder='Preço' required />
        <input type="text" placeholder='Categoria' required />

          <S.TransactionType>
            <S.TransactionTypeButton variant='income' value='income'> <ArrowCircleUp /> Entrada</S.TransactionTypeButton>

            <S.TransactionTypeButton variant='outcome' value='outcome'><ArrowCircleDown /> Saída</S.TransactionTypeButton>
          </S.TransactionType>

        <button type="submit">Cadastrar</button>
      </form>

    </S.Content>
  </Dialog.Portal>
  )
}

export default NewTransactionModal