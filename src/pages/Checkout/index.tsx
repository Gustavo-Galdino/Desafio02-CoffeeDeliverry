import { ConfirmAddress } from '../../components/ConfirmAddress'
import { SelectedCards } from '../../components/SelectedCards'
import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <div>
        <h2>Complete seu pedido</h2>
        <ConfirmAddress />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <SelectedCards />
      </div>
    </Container>
  )
}
