import styled from 'styled-components'
import banner from '../../assets/Banner.svg'

export const BannerContainer = styled.header`
  display: flex;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5.75rem 6rem;
  column-gap: 3.5rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    h1 {
      font-family: 'Ballo 2', sans-serif;
      font-weight: 800;
      font-size: 3rem;
      color: ${(props) => props.theme['base-title']};
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 4.125rem;
    }
  }
`

export const InfosContainer = styled.div`
  display: flex;
  width: 567px;
  height: 84px;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  flex-direction: column;
  line-height: 1.3;
  align-items: baseline;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
  }
`

const ICONS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow-default',
  gray: 'base-text',
  purple: 'purple-default',
} as const

interface IconsProps {
  iconsColor: keyof typeof ICONS_COLORS
}

export const IconsContainer = styled.span<IconsProps>`
  background: ${(props) => props.theme[ICONS_COLORS[props.iconsColor]]};
  border-radius: 50%;
  color: ${(props) => props.theme['white-default']};
  padding: 8px;
  display: flex;
`
