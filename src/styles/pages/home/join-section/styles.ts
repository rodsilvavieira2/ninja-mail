import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 3.6875rem;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    margin-top: 1.5625rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 2.3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 2.5rem;
  }
`;

export const InnerSection = styled.div`
  width: 100%;
  max-width: 15rem;

  margin: 0 auto;

  > * + * {
    margin-top: 0.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    font-size: 1.75rem;

    max-width: 29.6875rem;

    > * + * {
      margin-top: 1rem;
      text-align: left !important;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 43rem;

    > * + * {
      margin-top: 0.8125rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    max-width: 46.25rem;
  }
`;

export const JoinSectionTitle = styled.h1`
  font-weight: 900;
  font-size: 1.625rem;
  line-height: 2.25rem;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    font-size: 2.75rem;
    line-height: 3rem;
  }
`;

export const JointSectionForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;

  > input {
    width: 100%;

    max-width: 13.9375rem;
  }

  > * + * {
    margin-top: 0.4375rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: row;

    > * + * {
      margin-top: 0;
      margin-left: 1.0625rem;
    }

    > input {
      max-width: 17.1875rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 2.6rem;

    > * + * {
      margin-left: 1.5rem;
    }

    input {
      height: 3rem;

      max-width: 24rem;

      font-size: 1.2rem;
      line-height: 1.375rem;
      letter-spacing: 0.0406rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    margin-top: 2.8125rem;

    > * + * {
      margin-left: 1.6875rem;
    }

    input {
      height: 4.0625rem;

      max-width: 26.25rem;

      font-size: 1.3125rem;
      line-height: 1.5625rem;
      letter-spacing: 0.0656rem;
    }
  }
`;

export const MobileSussesMessage = styled.p`
  color: ${(props) => props.theme.colors.brand};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.875rem;

  letter-spacing: 0.6px;

  text-align: center;

  font-family: ${(props) => props.theme.fonts.secondary};

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const SmSussesMessage = styled.p`
  color: ${(props) => props.theme.colors.brand};
  font-size: 0.8125rem;
  line-height: 0.9375rem;
  letter-spacing: 0.0406rem;

  text-align: left;
  padding-left: 2rem;

  font-family: ${(props) => props.theme.fonts.secondary};

  display: none;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    display: block;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    font-size: 1.3125rem;
    line-height: 1.5625rem;

    padding-left: 5rem;
  }
`;
