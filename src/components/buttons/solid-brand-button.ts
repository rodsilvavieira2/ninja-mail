import styled from "styled-components";

import { BaseButton } from "./base-button";

export const BrandSolidButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.text.secondary};
  background-color: ${(props) => props.theme.colors.brand};
`;
