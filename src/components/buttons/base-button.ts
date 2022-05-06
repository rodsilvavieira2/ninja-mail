import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  border: 0;
  background-color: transparent;
  appearance: none;

  font-family: ${(props) => props.theme.fonts.secondary};

  font-weight: 900;
  font-size: 0.8125rem;
  line-height: 0.9375rem;
  letter-spacing: 0.65px;
  text-align: center;

  height: 2.625rem;
  padding: 0 1.375rem;

  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    font-size: 0.866rem;

    padding: 0 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 3rem;

    font-size: 1rem;
    line-height: 1.2rem;

    padding: 0 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 4.0625rem;

    padding: 0 2rem;

    font-size: 1.3125rem;
    line-height: 1.5625rem;

    letter-spacing: 1.05px;
  }
`;
