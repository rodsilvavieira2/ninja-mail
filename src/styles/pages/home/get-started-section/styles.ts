import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  margin-top: 4rem;

  height: 18.125rem;

  background-color: ${(props) => props.theme.colors.brand};

  color: ${(props) => props.theme.colors.text.secondary};

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    height: 15rem;
    margin-top: 5.9375rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 20rem;
    margin-top: 8.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 22.875rem;
    margin-top: 9.125rem;
  }
`;

export const GetStartedSectionTitle = styled.h1`
  font-weight: 900;
  font-size: 2.625rem;
  line-height: 3rem;
  text-align: center;

  margin-bottom: 3rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 3rem;
    line-height: 4.5rem;

    margin-bottom: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 3.75rem;
    line-height: 5rem;

    margin-bottom: 2.375rem;
  }
`;

export const GetStartedSectionPlanButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  font-family: ${(props) => props.theme.fonts.secondary};

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.brand};

  font-weight: 900;
  font-size: 0.8125rem;
  line-height: 0.9375rem;

  text-align: center;
  letter-spacing: 0.65px;

  padding: 0.8125rem 1.4375rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 3.8rem;

    padding: 0 1.5rem;

    font-size: 1.2rem;
    line-height: 1.5rem;

    letter-spacing: 0.85px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 4.0625rem;

    padding: 0 1.875rem;

    font-size: 1.3125rem;
    line-height: 1.5625rem;

    letter-spacing: 1.05px;
  }
`;
