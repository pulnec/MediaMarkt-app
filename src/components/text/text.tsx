import { Text as TextRN } from "react-native";
import { COLORS } from "../../utils/colors";

export default function Text(props: any) {
  return <TextRN {...props}>{props.value}</TextRN>;
}
