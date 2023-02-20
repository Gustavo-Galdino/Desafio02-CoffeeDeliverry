import { NavLink, Outlet } from 'react-router-dom'
import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

export function Nav() {
  const { shoppingCartAmout } = useShoppingCartContext()

  return (
    <>
      <HeaderContainer>
        <NavLink to="/">
          <img src={logo} alt="Coffe Delivery" />
        </NavLink>
        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <p>Assis, SP</p>
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
