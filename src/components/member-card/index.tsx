import Image, { StaticImageData } from "next/image";

import { FormatMemberTime } from "@src/util";

import { CardOverlay, Container, MemberName, StartTime } from "./styles";

type MemberCardProps = {
  src: StaticImageData;
  alt: string;
  memberName: string;
  startTime: string;
};

export function MemberCard({
  alt,
  memberName,
  src,
  startTime,
}: MemberCardProps) {
  return (
    <Container>
      <Image layout="fill" src={src} alt={alt} />

      <CardOverlay>
        <MemberName>{memberName}</MemberName>

        <StartTime dateTime={startTime}>
          {FormatMemberTime(startTime)}
        </StartTime>
      </CardOverlay>
    </Container>
  );
}
