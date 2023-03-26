import { View, Text } from "react-native";
import { Container, Label, ShadowStyle } from "./button.presets";

export default function Button({ onPress, label = "Button Text" }: any) {
  return (
    <Container style={ShadowStyle} onPress={onPress}>
      <Label value={label} />
    </Container>
  );
}
