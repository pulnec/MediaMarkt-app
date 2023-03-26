import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "./screenLayout.presets";
import { normalizeHorizontal } from "../../utils/normalize";

export default function ScreenLayout({
  children,
  noPaddingHorizontal = false,
}: any) {
  return (
    <Container
      style={{
        paddingHorizontal: noPaddingHorizontal ? 0 : normalizeHorizontal(20),
      }}
    >
      {children}
    </Container>
  );
}
