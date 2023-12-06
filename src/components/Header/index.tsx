import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from '../../assets/logo.svg'
import NewTransactionModal from '../NewTransactionModal'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default Header
