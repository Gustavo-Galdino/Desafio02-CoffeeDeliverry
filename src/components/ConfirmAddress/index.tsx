import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  AddressContainer,
  FormContainer,
  Input,
  PaymentContainer,
} from './styles'

interface AdressData {
  street: string
  neighborhood: string
  city: string
  state: string
}

export function ConfirmAddress() {
  const [cep, setCEP] = useState<AdressData>({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  })
  const { register } = useForm()
  const [cardStyle, setCardStyle] = useState('')

  async function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
    const cepTarget = event?.target.value

    if (cepTarget.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cepTarget}/json/`,
        )
        const data = await response.json()
        setCEP({
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        })
      } catch (error) {
        console.error(error)
      }
    }
  }

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
            {...register('CEP')}
            width="200px"
            type="text"
            placeholder="CEP"
            required
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
