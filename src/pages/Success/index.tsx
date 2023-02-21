import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  IconContainer,
  InfosContainer,
  SucessContainer,
  TitleContainer,
} from './styles'
import img from './Illustration.svg'
import { useAddressContext } from '../../context/AddressContext'

export function Success() {
  const { cep, addressNumber, adressComplement, optionsPayment, cardStyle } =
    useAddressContext()

  return (
    <>
      <SucessContainer>
        <div>
          <TitleContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h3>Agora é só aguardar que logo o café chegará até você</h3>
          </TitleContainer>
          <InfosContainer>
            <IconContainer>
              <span>
                <MapPin size={16} weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>{`${cep.street}, ${addressNumber} - ${adressComplement}`}</strong>
                </p>
                <p>{`${cep.neighborhood} - ${cep.city}, ${cep.state}`}</p>
              </div>
            </IconContainer>
            <IconContainer>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30min</strong>
              </div>
            </IconContainer>
            <IconContainer>
              <span>
                <CurrencyDollar size={16} weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{optionsPayment(cardStyle)}</strong>
              </div>
            </IconContainer>
          </InfosContainer>
        </div>
        <img src={img} alt="" />
      </SucessContainer>
    </>
  )
}
