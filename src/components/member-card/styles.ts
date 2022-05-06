import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 13.9375rem;
  height: 9.8125rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    height: 13rem;

    max-width: 20rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    height: 14.9375rem;

    max-width: 21.375rem;
  }
`;

export const CardOverlay = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: flex-start;

  position: absolute;
  inset: 0;

  z-index: 1;

  color: ${(props) => props.theme.colors.text.secondary};

  padding: 0.9375rem 1.0625rem;
`;

export const MemberName = styled.strong`
  font-weight: 900;
  font-size: 1.375rem;
  line-height: 1.625rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 2rem;
    line-height: 2.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 2.125rem;
    line-height: 2.5rem;
  }
`;

export const StartTime = styled.time`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0.875rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 0.3rem;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 0.5rem;
    font-size: 1.1875rem;
    line-height: 1.375rem;
  }
`;
