import { Container, PriceContainer, SelectedCoffee } from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { NavLink } from 'react-router-dom'

export function SelectedCards() {
  const {
    shoppingCart,
    setShoppingCart,
    addCoffeeAmout,
    removeCoffeeAmout,
    priceCoffee,
    removeCoffeCart,
  } = useShoppingCartContext()

  function confirmOrder() {
    setShoppingCart([])
  }

  return (
    <>
      <Container>
        {shoppingCart.map((coffee) => (
          <div key={coffee.id}>
            <SelectedCoffee>
              <img src={coffee.img} alt="" />
              <div>
                <p>{coffee.name}</p>
                <div className="handlesContainer">
                  <div className="coffee-count">
                    <button onClick={() => removeCoffeeAmout(coffee.id)}>
                      <Minus size={14} weight="fill" />
                    </button>
                    <p>{coffee.amount}</p>
                    <button onClick={() => addCoffeeAmout(coffee.id)}>
                      <Plus size={14} weight="fill" />
                    </button>
                  </div>
                  <button onClick={() => removeCoffeCart(coffee.id)}>
                    <span>
                      <Trash size={16} />
                    </span>
                    Remover
                  </button>
                </div>
              </div>
              <p>R$ {coffee.price!.toFixed(2)}</p>
            </SelectedCoffee>
          </div>
        ))}

        <PriceContainer>
          <div>
            <p>Total de Itens</p>
            <p>R$ {priceCoffee.toFixed(2)}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <p>Total</p>
            <p>R$ {(priceCoffee + 3.5).toFixed(2)}</p>
          </div>
          <NavLink to="/success" className="button" onClick={confirmOrder}>
            <button disabled={priceCoffee === 0}>Confirmar Pedido</button>
          </NavLink>
        </PriceContainer>
      </Container>
    </>
  )
}
