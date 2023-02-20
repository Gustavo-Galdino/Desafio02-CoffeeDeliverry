import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import headerimg from '../../assets/headerimg.svg'
import {
  BannerContainer,
  ContentContainer,
  IconsContainer,
  InfosContainer,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <ContentContainer>
        <div className="title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <InfosContainer>
          <div>
            <IconsContainer iconsColor="yellowDark">
              <ShoppingCart size={16} weight="fill" />
            </IconsContainer>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <IconsContainer iconsColor="yellow">
              <Timer size={16} weight="fill" />
            </IconsContainer>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <IconsContainer iconsColor="gray">
              <Package size={16} weight="fill" />
            </IconsContainer>
            <p>Embalagem mantém o café intacto</p>
          </div>

          <div>
            <IconsContainer iconsColor="purple">
              <Coffee size={16} weight="fill" />
            </IconsContainer>
            <p>O café chega fresquinho até você</p>
          </div>
        </InfosContainer>
      </ContentContainer>
      <img
        src={headerimg}
        alt="Imagem de um copo de cafe com fundo amarelo e alguns graos de cafe ao fundo, copo contem um rotulo preto com o logo da marca Coffe Delivery"
      />
    </BannerContainer>
  )
}
