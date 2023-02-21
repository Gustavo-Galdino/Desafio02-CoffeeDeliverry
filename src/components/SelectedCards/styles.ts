import styled from 'styled-components'

export const Container = styled.section`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
  width: 448px;
`
export const SelectedCoffee = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 24px 0;
  div {
    .handlesContainer {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      margin-top: 0.5rem;

      .coffee-count {
        display: flex;
        align-items: center;
        padding: 0.1875rem;
        column-gap: 0.25rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;

        button {
          color: ${(props) => props.theme['purple-default']};
          border: 0;

          &:hover {
            cursor: pointer;
            color: ${(props) => props.theme['purple-dark']};
            background: 0;
          }
        }

        p {
          color: ${(props) => props.theme['base-title']};
        }
      }
    }

    button {
      border: 0;
      background: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      padding: 8px;
      font-size: 0.75rem;
      line-height: 1.6;

      display: flex;
      align-items: center;
      column-gap: 0.25rem;

      span {
        color: ${(props) => props.theme['purple-default']};
        display: flex;
      }

      &:hover {
        background: ${(props) => props.theme['base-hover']};
        cursor: pointer;
      }
    }
  }

  > p {
    align-self: flex-start;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  margin-top: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;
    line-height: 1.3;

    p {
      &:first-child {
        font-size: 0.875rem;
      }

      &:last-child {
        font-size: 1rem;
      }
    }
  }

  .button {
    text-decoration: none;

    button {
      border: 0;
      background: ${(props) => props.theme['yellow-default']};
      border-radius: 6px;
      color: ${(props) => props.theme['white-default']};
      padding: 12px 8px;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.6;
      width: 100%;

      &:disabled {
        opacity: 70%;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        cursor: pointer;
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
