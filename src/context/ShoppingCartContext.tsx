import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import Tradicional from './images/Expresso.svg'
import Americano from './images/Americano.svg'
import Cremoso from './images/ExpressoCremoso.svg'
import Gelado from './images/CaféGelado.svg'
import cafeComLeite from './images/CafécomLeite.svg'
import Latte from './images/Latte.svg'
import Capuccino from './images/Capuccino.svg'
import Macchiato from './images/Macchiato.svg'
import Mochaccino from './images/Mochaccino.svg'
import ChocolateQuente from './images/ChocolateQuente.svg'
import Cubano from './images/Cubano.svg'
import Havaiano from './images/Havaiano.svg'
import Árabe from './images/Árabe.svg'
import Irlandês from './images/Irlandês.svg'
import { v4 as uuidv4 } from 'uuid'

interface CreateShoppingCartData {
  id: string
  img?: string
  name?: string
  price?: number
  amount?: number
}

interface CoffeMenuData {
  id: string
  img: string
  type: string[]
  name: string
  title: string
  price: number
}

interface ShoppingCartContextType {
  shoppingCart: CreateShoppingCartData[]
  setShoppingCart: Dispatch<SetStateAction<CreateShoppingCartData[]>>
  shoppingCartAmout: number
  setShoppingCartAmout: Dispatch<SetStateAction<number>>
  menuCoffee: CoffeMenuData[]
  setMenuCoffee: React.Dispatch<React.SetStateAction<CoffeMenuData[]>>
  menuList: CoffeMenuData[]
  priceCoffee: number
  setPriceCoffee: Dispatch<SetStateAction<number>>
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartProviderProps {
  children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CreateShoppingCartData[]>([])
  const [shoppingCartAmout, setShoppingCartAmout] = useState(0)
  const [priceCoffee, setPriceCoffee] = useState(0)

  const menuList = [
    {
      id: uuidv4(),
      img: Tradicional,
      type: ['TRADICIONAL'],
      name: 'Expresso Tradicional',
      title: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Americano,
      type: ['TRADICIONAL'],
      name: 'Expresso Americano',
      title: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Cremoso,
      type: ['TRADICIONAL'],
      name: 'Expresso Cremoso',
      title: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Gelado,
      type: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Gelado',
      title: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: cafeComLeite,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Café com Leite',
      title: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Latte,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Latte',
      title: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Capuccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Capuccino',
      title: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Macchiato,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Macchiato',
      title: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Mochaccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Mocaccino',
      title: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: ChocolateQuente,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Chocolate Quente',
      title: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Cubano,
      type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      name: 'Cubano',
      title: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Havaiano,
      type: ['ESPECIAL'],
      name: 'Havaiano',
      title: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Árabe,
      type: ['ESPECIAL'],
      name: 'Árabe',
      title: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: uuidv4(),
      img: Irlandês,
      type: ['ESPECIAL', 'ALCOÓLICO'],
      name: 'Irlandês',
      title: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
    },
  ]

  const [menuCoffee, setMenuCoffee] = useState(menuList)

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        shoppingCartAmout,
        setShoppingCartAmout,
        menuCoffee,
        setMenuCoffee,
        menuList,
        priceCoffee,
        setPriceCoffee,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCartContext() {
  const {
    shoppingCart,
    setShoppingCart,
    shoppingCartAmout,
    setShoppingCartAmout,
    menuCoffee,
    setMenuCoffee,
    menuList,
    priceCoffee,
    setPriceCoffee,
  } = useContext(ShoppingCartContext)

  const coffeesType = [
    'TODOS',
    'TRADICIONAL',
    'GELADO',
    'COM LEITE',
    'ESPECIAL',
    'ALCOÓLICO',
  ]

  function handleFilterCoffeeSelect(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    if (event.currentTarget.value === 'TODOS') {
      setMenuCoffee(menuList)
    } else {
      setMenuCoffee(
        menuList.filter((coffee) =>
          coffee.type.includes(event.currentTarget.value),
        ),
      )
    }
  }

  function addCoffeeAmout(
    id: string,
    img?: string,
    name?: string,
    price?: number,
  ) {
    const newCoffee: CreateShoppingCartData = {
      id,
      img,
      name,
      price,
    }

    const coffeeIsReal = shoppingCart.some((state) => state.id === newCoffee.id)

    if (!coffeeIsReal) {
      newCoffee.amount = 1
      return setShoppingCart((state) => [...state, newCoffee])
    }

    setShoppingCart((state) =>
      state.map((coffee) => {
        if (coffee.id === newCoffee.id) coffee.amount! += 1

        return coffee
      }),
    )
  }

  function removeCoffeeAmout(id: string) {
    const newCoffee: CreateShoppingCartData = {
      id,
    }

    const coffeeAmout = shoppingCart.find((state) => state.id === newCoffee.id)
    const validityAmoutCoffe =
      coffeeAmout?.amount === 1 || coffeeAmout?.amount === 0

    if (validityAmoutCoffe) {
      return setShoppingCart((state) =>
        state.filter((coffee) => coffee.id !== newCoffee.id),
      )
    }

    setShoppingCart((state) =>
      state.map((coffee) => {
        if (coffee.id === newCoffee.id && coffee.amount! > 0)
          coffee.amount! -= 1

        return coffee
      }),
    )
  }

  function removeCoffeCart(id: string) {
    return setShoppingCart((state) =>
      state.filter((coffee) => coffee.id !== id),
    )
  }

  useEffect(() => {
    const { totalPriceCoffees, countCoffees } = shoppingCart.reduce(
      (count, coffee) => ({
        countCoffees: count.countCoffees + coffee.amount!,
        totalPriceCoffees:
          count.totalPriceCoffees + coffee.price! * coffee.amount!,
      }),
      {
        countCoffees: 0,
        totalPriceCoffees: 0,
      },
    )
    setShoppingCartAmout(countCoffees)
    setPriceCoffee(totalPriceCoffees)
  }, [shoppingCart, setShoppingCartAmout, setPriceCoffee])

  return {
    shoppingCart,
    addCoffeeAmout,
    removeCoffeeAmout,
    shoppingCartAmout,
    coffeesType,
    menuCoffee,
    handleFilterCoffeeSelect,
    priceCoffee,
    removeCoffeCart,
  }
}
