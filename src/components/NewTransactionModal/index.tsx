import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'
import { X } from 'phosphor-react'

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

        <button type="submit">Cadastrar</button>
      </form>

    </S.Content>
  </Dialog.Portal>
  )
}

export default NewTransactionModal