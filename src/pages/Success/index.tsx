import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  IconContainer,
  InfosContainer,
  SucessContainer,
  TitleContainer,
} from './styles'
import img from './Illustration.svg'

export function Success() {
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
                  Entrega em <strong>Rua Joao Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos-Porto Alegre, RS</p>
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
                <strong>cartao de credito</strong>
              </div>
            </IconContainer>
          </InfosContainer>
        </div>
        <img src={img} alt="" />
      </SucessContainer>
    </>
  )
}
