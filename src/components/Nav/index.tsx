import { NavLink, Outlet } from 'react-router-dom'
import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useAddressContext } from '../../context/AddressContext'

export function Nav() {
  const { shoppingCartAmout } = useShoppingCartContext()
  const { cep } = useAddressContext()

  return (
    <>
      <HeaderContainer>
        <NavLink to="/">
          <img src={logo} alt="Coffe Delivery" />
        </NavLink>
        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <p>{cep.city ? `${cep.city}, ${cep.state}` : 'Brasil'}</p>
          </LocationContainer>
          <CartContainer>
            <NavLink to="/checkout">
              <ShoppingCart size={24} weight="fill" />
              <span>{shoppingCartAmout}</span>
            </NavLink>
          </CartContainer>
        </div>
      </HeaderContainer>
      <Outlet />
    </>
  )
}
