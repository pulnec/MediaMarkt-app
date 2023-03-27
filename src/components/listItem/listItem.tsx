import { View, Text, Image } from "react-native";
import {
  Container,
  Title,
  PrimarySubTitle,
  TextContainer,
  SecondarySubTitle,
  RightContainer,
  TextRight,
  IconLeft,
} from "./listItem.presets";

const PRESET_ICON: any = {
  carrier: require("../../images/carrier.png"),
};

export default function ListItem({
  title,
  primarySubTitle,
  secondarySubTitle,
  textRight,
  icon,
}: any) {
  return (
    <Container>
      {icon && (
        <IconLeft>
          <Image
            source={PRESET_ICON[icon]}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </IconLeft>
      )}
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
