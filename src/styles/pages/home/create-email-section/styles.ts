import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: relative;

  background: transparent;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    height: 19.625rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    height: 15.625rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 22.75rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 23.9375rem;
  }
`;

export const InnerSection = styled.div`
  position: relative;

  width: 100%;
  margin: 0 auto;

  max-width: 18.8125rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 95%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    max-width: 711px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 85%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 68rem;
  }
`;

export const CreateEmailSectionImageWrapper = styled.div`
  position: absolute;

  top: 13%;
  bottom: 30%;
  left: 0;
  right: 0;
  z-index: -1;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    top: 0;
    bottom: 0;
    left: auto;
    width: 62.3%;
  }
`;

export const CreateEmailTextWrapper = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    max-width: 19.6875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 34rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 30.5625rem;
  }
`;

export const CreateEmailText = styled.h1`
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 2.875rem;

  margin-bottom: 6.125rem;

  max-width: 17.75rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    margin-bottom: 1.0625rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    font-size: 38px;
    line-height: 46px;
    max-width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 3.6875rem;
    line-height: 4.4375rem;
  }
`;

export const CreateEmailSubText = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;

  font-family: "Raleway", sans-serif;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 1.15rem;
    line-height: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 1.1875rem;
    line-height: 1.625rem;
  }
`;

export const CreateEmailButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  > a {
    flex: 1;
  }

  > a + a {
    margin-left: 0.875rem;
  }
`;
