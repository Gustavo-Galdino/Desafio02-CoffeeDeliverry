import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useAddressContext } from '../../context/AddressContext'
import {
  AddressContainer,
  FormContainer,
  Input,
  PaymentContainer,
} from './styles'

export function ConfirmAddress() {
  const { cep, handleCepChange, register, cardStyle, setCardStyle } =
    useAddressContext()

  return (
    <>
      <AddressContainer>
        <div>
          <MapPinLine size={22} />
          <div className="title">
            <h3>Endreço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <FormContainer>
          <Input
            {...register('CEP', { required: true })}
            width="200px"
            type="text"
            placeholder="CEP"
            onChange={handleCepChange}
          />
          <Input
            {...register('street')}
            width="calc(100% - 12px)"
            type="text"
            placeholder="Rua"
            value={cep.street}
          />
          <Input
            {...register('number')}
            width="200px"
            type="text"
            placeholder="Número"
          />
          <Input
            {...register('complement')}
            width="calc(100% - 224px)"
            type="text"
            placeholder="Complemento"
          />
          <Input
            {...register('neighborhood')}
            width="200px"
            type="text"
            placeholder="Bairro"
            value={cep.neighborhood}
          />
          <Input
            {...register('city')}
            width="calc(100% - 296px)"
            type="text"
            placeholder="Cidade"
            value={cep.city}
          />
          <Input
            {...register('state')}
            width="60px"
            type="text"
            placeholder="UF"
            value={cep.state}
          />
        </FormContainer>
      </AddressContainer>
      <PaymentContainer>
        <div className="title">
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <div>
          <div
            className={`payoptions ${cardStyle === 'credit' ? 'active' : ''}`}
            onClick={() => setCardStyle(cardStyle === 'credit' ? '' : 'credit')}
          >
            <CreditCard size={16} />
            <p>Cartão de Crédito</p>
          </div>
          <div
            className={`payoptions ${cardStyle === 'debit' ? 'active' : ''}`}
            onClick={() => setCardStyle(cardStyle === 'debit' ? '' : 'debit')}
          >
            <Bank size={16} />
            <p>Cartão de Débito</p>
          </div>
          <div
            className={`payoptions ${cardStyle === 'money' ? 'active' : ''}`}
            onClick={() => setCardStyle(cardStyle === 'money' ? '' : 'money')}
          >
            <Money size={16} />
            <p>Dinheiro</p>
          </div>
        </div>
      </PaymentContainer>
    </>
  )
}
