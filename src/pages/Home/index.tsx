import { Banner } from '../../components/Banner'
import { Card } from '../../components/Card'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { CoffeeContainer, MainContainer } from './styles'

export function Home() {
  const { handleFilterCoffeeSelect, coffeesType, menuCoffee } =
    useShoppingCartContext()

  return (
    <>
      <Banner />
      <MainContainer>
        <div>
          <h2>Nossos cafés</h2>
          <div className="filterContainer">
            {coffeesType.map((type) => (
              <button
                key={type}
                value={type}
                onClick={handleFilterCoffeeSelect}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <CoffeeContainer>
          {menuCoffee.map((coffe) => (
            <Card
              key={coffe.id}
              id={coffe.id}
              img={coffe.img}
              name={coffe.name}
              price={coffe.price}
              title={coffe.title}
              type={coffe.type}
            />
          ))}
        </CoffeeContainer>
      </MainContainer>
    </>
  )
}
