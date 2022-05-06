import styled from "styled-components";

import { BaseLinkButton } from "./base-link-button";

export const BrandSolidLinkButton = styled(BaseLinkButton)`
  color: ${(props) => props.theme.colors.text.secondary};
  background-color: ${(props) => props.theme.colors.brand};
`;
