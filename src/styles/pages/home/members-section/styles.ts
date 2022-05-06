import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin-top: 1.875rem;

  > div + div {
    margin-top: 1.3125rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    margin-top: 8.3125rem;
    flex-direction: row;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    margin-top: 5.4375rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 6rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 8.3125rem;
  }
`;

export const InnerSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  > div + div {
    margin-top: 1.3125rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    justify-content: center;

    flex-direction: row;

    max-width: 95%;

    > div {
      flex: 1;
    }

    > div + div {
      margin-left: 2rem;
      margin-top: 0;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 44.25rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 85%;

    > div + div {
      margin-left: 1.8rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 68.0625rem;

    > div + div {
      margin-left: 2rem;
    }
  }
`;
