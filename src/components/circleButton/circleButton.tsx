import { View, Text } from "react-native";
import { Container, ShadowStyle } from "./circleButton.presets";
import Icons from "../icons";
import { IPropsCircleButton } from "./circleButton.props";

export default function CircleButton({ onPress }: IPropsCircleButton) {
  return (
    <Container onPress={onPress} style={ShadowStyle}>
      <Icons.PlusIcon />
    </Container>
  );
}
