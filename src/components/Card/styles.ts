import styled from 'styled-components'

export const CoffeeContainer = styled.article`
  height: 310px;
  width: 256px;
  margin-top: 3.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -1.5rem;
  }

  > div > span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;

    margin-left: 4px;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Ballo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 700;
    margin-top: 1.5rem;
  }

  > p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 2rem;
  }
  .price {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cartIcon {
    color: ${(props) => props.theme['white-default']};
    background: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme['purple-default']};
    }
  }
`
export const BuyContainer = styled.div`
  padding: 0.25rem 0.5rem;
  column-gap: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  margin-left: 1.5rem;
  margin-right: 0.5rem;

  button {
    color: ${(props) => props.theme['purple-default']};
    border: 0;
    background: 0;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme['purple-dark']};
      background: 0;
    }
  }

  p {
    color: ${(props) => props.theme['base-title']};
  }
`
