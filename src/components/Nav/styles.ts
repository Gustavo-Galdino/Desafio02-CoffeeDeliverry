import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;
  }
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-default']};
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  margin-left: 0.5rem;
  position: relative;

  span {
    color: ${(props) => props.theme['white-default']};
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 100%;
    text-decoration: none;
    position: absolute;
    font-size: 0.75rem;
    font-weight: 700;

    top: -8px;
    right: -8.35px;

    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
