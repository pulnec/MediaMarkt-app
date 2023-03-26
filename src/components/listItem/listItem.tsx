import { View, Text } from "react-native";
import {
  Container,
  Title,
  PrimarySubTitle,
  TextContainer,
  SecondarySubTitle,
  RightContainer,
  TextRight,
} from "./listItem.presets";

export default function ListItem({
  title,
  primarySubTitle,
  secondarySubTitle,
  textRight,
}: any) {
  return (
    <Container>
      <TextContainer>
        <Title value={title} />
        <PrimarySubTitle value={primarySubTitle} />
        <SecondarySubTitle value={secondarySubTitle} />
      </TextContainer>
      <RightContainer>
        <TextRight value={textRight} />
      </RightContainer>
    </Container>
  );
}
