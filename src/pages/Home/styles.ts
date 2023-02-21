import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 128px 160px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.3;
      align-self: baseline;
    }
    .filterContainer {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      > button {
        color: ${(props) => props.theme['yellow-dark']};
        border: 1px solid ${(props) => props.theme['yellow-default']};
        border-radius: 100px;
        padding: 0.5rem 0.375rem;
        font-weight: 700;
        font-size: 0.625rem;
        line-height: 1.3;
        text-transform: uppercase;
        background: 0;

        &:hover {
          background: ${(props) => props.theme['yellow-light']};
          cursor: pointer;
        }
      }
    }
  }
`

export const CoffeeContainer = styled.section`
  gap: 3.75rem 2rem;
  display: flex;
  flex-wrap: wrap;
`
