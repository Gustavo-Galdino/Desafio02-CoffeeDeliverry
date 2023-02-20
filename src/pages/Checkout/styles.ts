import styled from 'styled-components'

export const ConfirmContainer = styled.section``

export const Container = styled.div`
  display: grid;
  grid-template-columns: 640px auto;
  column-gap: 2rem;
  padding: 140px 160px;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    margin-bottom: 1rem;
  }
`
