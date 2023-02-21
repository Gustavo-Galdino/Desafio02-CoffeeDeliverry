import styled from 'styled-components'

export const SucessContainer = styled.section`
  padding: 160px;
  display: flex;
  column-gap: 6.375rem;
  align-items: center;
  justify-content: center;
`

export const TitleContainer = styled.header`
  margin-bottom: 40px;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfosContainer = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2.5rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  span {
    background: ${(props) => props.theme['purple-default']};
    color: ${(props) => props.theme['white-default']};
    border-radius: 999px;
    padding: 8px;
    display: flex;
  }
  p {
    line-height: 1.3;
  }
`
