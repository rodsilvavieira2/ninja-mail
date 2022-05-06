import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;

  margin-top: 3.375rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    margin-top: 4.875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 6rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 7.5rem;
  }
`;

export const BrandSectionTitle = styled.h1`
  font-weight: 900;
  font-size: 1.625rem;
  line-height: 2.25rem;
  text-align: center;

  max-width: 14.5rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    font-size: 1.75rem;
    max-width: 15.875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 2.5rem;
    line-height: 2.5rem;

    max-width: 24.125rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 2.75rem;
    line-height: 3rem;
  }
`;

export const BrandSectionBrandsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  position: relative;

  margin-top: 2.1875rem;

  max-width: 14.8125rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1 0 43%;
    position: relative;

    height: 1.875rem;

    margin: 0.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-wrap: nowrap;
    max-width: 37.8125rem;

    margin-top: 2.75rem;

    > div {
      flex: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 3.25rem;
    max-width: 55rem;

    > div {
      height: 3rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 3.625rem;
    max-width: 57.875rem;
  }
`;
