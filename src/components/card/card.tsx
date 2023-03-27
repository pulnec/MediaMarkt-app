import { View, Text } from "react-native";
import { Container, ShadowStyle } from "./card.presets";

export default function Card({ children }: any) {
  return <Container style={ShadowStyle}>{children}</Container>;
}
