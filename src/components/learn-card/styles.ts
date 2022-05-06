import styled from "styled-components";

export const Container = styled.div`
  max-width: 13.0625rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${(props) => props.theme.colors.primary};

  flex-shrink: 0;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    height: fit-content;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 18rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 19.9375rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10.375rem;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    height: 10.375rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 14rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 15.625rem;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;

  height: 8rem;

  padding: 0 1.25rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 10rem;

    padding: 0 1.4rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 12.25rem;

    padding: 0 1.875rem;
  }
`;

export const CardFooterText = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  font-family: ${(props) => props.theme.fonts.secondary};

  max-height: 80px;

  width: 100%;

  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 0.9rem;
    line-height: 1.625rem;

    max-height: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 1rem;
    line-height: 1.625rem;

    max-height: 100%;
  }
`;

export const CardFooterLink = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;
  font-weight: 800;

  font-size: 0.75rem;
  line-height: 0.875rem;

  color: ${(props) => props.theme.colors.brand};

  margin-top: 0.8125rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 0.9rem;
    line-height: 1.625rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 1rem;
    line-height: 1.1875rem;
  }
`;
