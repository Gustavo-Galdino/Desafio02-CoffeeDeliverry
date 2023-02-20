import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { BuyContainer, CoffeeContainer } from './styles'

interface Menu {
  id: string
  img: string
  type: string[]
  name: string
  title: string
  price: number
}

export function Card({ id, img, type, name, title, price }: Menu) {
  const { shoppingCart, addCoffeeAmout, removeCoffeeAmout } =
    useShoppingCartContext()

  const shoppingCartAmout = shoppingCart.find((state) => state.id === id)

  return (
    <>
      <CoffeeContainer>
        <img src={img} alt="" />
        <div>
          {type.map((types) => (
            <span key={types}>{types}</span>
          ))}
        </div>
        <h3>{name}</h3>
        <p>{title}</p>
        <div>
          <p>
            R$ <span className="price">{price.toFixed(2)}</span>
          </p>
          <BuyContainer>
            <button type="button" onClick={() => removeCoffeeAmout(id)}>
              <Minus size={14} weight="fill" />
            </button>
            <p>{shoppingCartAmout?.amount || 0}</p>
            <button
              type="button"
              onClick={() => addCoffeeAmout(id, img, name, price)}
            >
              <Plus size={14} weight="fill" />
            </button>
          </BuyContainer>
          <NavLink to="/checkout" className="cartIcon">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </CoffeeContainer>
    </>
  )
}
