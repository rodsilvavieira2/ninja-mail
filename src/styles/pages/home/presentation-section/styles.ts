import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin-top: 2.0625rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    margin-top: 4rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 6.125rem;
  }
`;

export const InnerSection = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;

  margin: 0 auto;
  width: 100%;

  max-width: 18.875rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: row;

    max-width: 95%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 44.375rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    flex-wrap: nowrap;
    max-width: 85%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 68.625rem;
  }
`;

export const PresentationSectionCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div + div {
    margin-top: 0.9375rem;
    margin-left: auto;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-wrap: nowrap;
    flex-shrink: 0;

    > div + div {
      margin-top: 3.625rem;
      margin-left: 1.9375rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    > div + div {
      margin-top: 3.615rem;
      margin-left: 1.9194rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    > div + div {
      margin-top: 4rem;
      margin-left: 2rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    > div + div {
      margin-top: 5.5rem;
      margin-left: 2.9375rem;
    }
  }
`;

export const PresentationSectionTextsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  margin-top: 1.125rem;

  margin: 0 auto;
  width: 100%;

  max-width: 12.875rem;

  margin-top: 1.125rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    text-align: left;
    margin-left: 1.8125rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 100%;
    margin-left: 2.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 100%;
    margin-left: 2.875rem;
  }
`;

export const PresentationSectionTitle = styled.h1`
  font-weight: 900;
  font-size: 1.75rem;
  line-height: 1.9375rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 2.75rem;
    line-height: 3rem;
  }
`;

export const PresentationSectionSubtext = styled.p`
  font-family: "Raleway";
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;

  margin-top: 1.0625rem;

  text-align: left;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 1.3rem;
    font-size: 1rem;
    line-height: 1.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 1.5rem;
    font-size: 1.1875rem;
    line-height: 1.625rem;
  }
`;
