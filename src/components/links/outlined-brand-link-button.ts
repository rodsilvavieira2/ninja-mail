import styled from "styled-components";

import { BaseLinkButton } from "./base-link-button";

export const OutlinedBrandLinkButton = styled(BaseLinkButton)`
  color: ${(props) => props.theme.colors.brand};
  background-color: ${(props) => props.theme.colors.primary};

  box-shadow: inset 0 0 0 3px ${(props) => props.theme.colors.brand};
`;
