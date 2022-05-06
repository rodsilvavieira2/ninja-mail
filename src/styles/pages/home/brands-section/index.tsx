import Image from "next/image";

import { brandLogos } from "../home.conf";
import {
  Container,
  BrandSectionTitle,
  BrandSectionBrandsWrapper,
} from "./styles";

export function BrandsSection() {
  return (
    <Container>
      <BrandSectionTitle>All the best brands already use us.</BrandSectionTitle>

      <BrandSectionBrandsWrapper>
        {brandLogos.map((logo) => (
          <div key={logo.id}>
            <Image layout="intrinsic" src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </BrandSectionBrandsWrapper>
    </Container>
  );
}
