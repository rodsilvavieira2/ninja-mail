import Image, { StaticImageData } from "next/image";

import {
  CardFooter,
  CardFooterText,
  Container,
  ImageWrapper,
  CardFooterLink,
} from "./styles";

export type LearnCardProps = {
  src: StaticImageData;
  alt: string;
  text: string;
  link: string;
};

export function LearnCard({ alt, link, src, text }: LearnCardProps) {
  return (
    <Container>
      <ImageWrapper>
        <Image layout="responsive" src={src} alt={alt} />
      </ImageWrapper>

      <CardFooter>
        <CardFooterText>{text}</CardFooterText>

        <CardFooterLink href={link}>Learn More &gt;</CardFooterLink>
      </CardFooter>
    </Container>
  );
}
