import { View, Text } from "react-native";
import {
  Container,
  Label,
  ShadowStyle,
  ContainerSecondary,
  LabelSecondary,
} from "./button.presets";

export default function Button({
  onPress,
  label = "Button Text",
  preset = "primary",
}: any) {
  if (preset === "secondary") {
    return (
      <ContainerSecondary onPress={onPress}>
        <LabelSecondary value={label} />
      </ContainerSecondary>
    );
  }
  return (
    <Container style={ShadowStyle} onPress={onPress}>
      <Label value={label} />
    </Container>
  );
}
