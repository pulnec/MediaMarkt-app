import { View, Text, TouchableOpacity } from "react-native";
import Icons from "../icons";

export default function BackButton({ onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icons.BackIcon />
    </TouchableOpacity>
  );
}
