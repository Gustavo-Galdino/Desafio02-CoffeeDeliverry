import styled from 'styled-components'

export const AddressContainer = styled.section`
  line-height: 1.6;
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  margin-bottom: 0.75rem;
  border-radius: 6px;

  div {
    color: ${(props) => props.theme['yellow-dark']};
    display: flex;
    column-gap: 0.5rem;

    .title {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      h3 {
        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
      }
    }
  }
`
interface InputProps {
  width: string
}

export const Input = styled.input<InputProps>`
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  border-radius: 4px;
  width: ${(props) => props.width};
  margin-right: 12px;
  margin-bottom: 16px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const FormContainer = styled.form``

export const PaymentContainer = styled.section`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  .title {
    display: flex;
    column-gap: 0.5rem;
    color: ${(props) => props.theme['purple-default']};
    align-items: flex-start;

    > div {
      h3 {
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 1.3;
      }

      > p {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
        margin-bottom: 2rem;
      }
    }
  }

  > div {
    display: flex;
    align-items: center;

    margin-bottom: 0.125rem;
    justify-content: center;
  }

  .payoptions {
    background: ${(props) => props.theme['base-button']};
    padding: 1rem;
    border-radius: 6px;
    column-gap: 0.75rem;
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['purple-default']};

    > p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.75rem;
      line-height: 1.6;
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      cursor: pointer;
    }
  }

  .active {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-default']};
  }
`
