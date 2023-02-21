import React, { createContext, ReactNode, useContext, useState } from 'react'
import {
  FieldValues,
  useForm,
  UseFormGetValues,
  UseFormRegister,
} from 'react-hook-form'

interface AddressData {
  street: string
  neighborhood: string
  city: string
  state: string
}

interface AddressContextData {
  cep: AddressData
  setCEP: React.Dispatch<React.SetStateAction<AddressData>>
  register: UseFormRegister<FieldValues>
  getValues: UseFormGetValues<FieldValues>
  cardStyle: string
  setCardStyle: React.Dispatch<React.SetStateAction<string>>
}

export const AddressContext = createContext({} as AddressContextData)

interface AddressProviderProps {
  children: ReactNode
}

export function AddressProvider({ children }: AddressProviderProps) {
  const [cep, setCEP] = useState({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  })
  const { register, getValues } = useForm()
  const [cardStyle, setCardStyle] = useState('')

  return (
    <AddressContext.Provider
      value={{ cep, setCEP, register, getValues, cardStyle, setCardStyle }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export function useAddressContext() {
  const { cep, setCEP, register, getValues, cardStyle, setCardStyle } =
    useContext(AddressContext)

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

  function optionsPayment(cardStyled: string) {
    switch (cardStyled) {
      case 'credit':
        return 'Cartão de Credito'
      case 'debit':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'
      default:
        return 'Forma de pagamento não selecionado'
    }
  }

  const addressNumber = getValues('number')
  const adressComplement = getValues('complement')

  return {
    cep,
    handleCepChange,
    register,
    getValues,
    addressNumber,
    adressComplement,
    cardStyle,
    setCardStyle,
    optionsPayment,
  }
}
