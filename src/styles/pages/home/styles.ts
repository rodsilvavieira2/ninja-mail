import styled from "styled-components";

export const Main = styled.main`
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 0;
  }
`;

export const Background = styled.div`
  background-image: url("/main-bg.png");

  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 280px;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    background-image: url("/main-bg-sm.png");
    background-position: 0 -30px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    background-position: 0 15px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    background-image: url("/main-bg-lg.png");
    background-position: 0 -32px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    background-image: url("/main-bg-lg.png");
    background-position: 0 -12px;
  }
`;

export const TopBackground = styled.div`
  height: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    height: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    height: 4.1875rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 6.8125rem;
  }
`;
