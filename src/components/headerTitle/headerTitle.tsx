import { View, Platform } from "react-native";
import Text from "../text/text";
import { COLORS } from "../../utils/colors";
import {
  normalizeFont as nf,
  normalizeHorizontal as wp,
} from "../../utils/normalize";

export default function HeaderTitle({ title, back, route }: any) {
  return (
    <View
      style={{
        paddingHorizontal: back ? wp(4) : wp(16),
        paddingBottom: Platform.OS === "android" ? 5 : 0,
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: nf(24),
          fontWeight: "500",
          color: COLORS.TEXT.PRIMARY,
        }}
        value={title || route.params.title}
      />
    </View>
  );
}
