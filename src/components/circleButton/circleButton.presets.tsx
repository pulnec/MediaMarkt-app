import { Pressable, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
} from "../../utils/normalize";

export const Container = styled(Pressable)`
  width: ${wp(48)}px;
  height: ${wp(48)}px;
  background-color: ${COLORS.PRIMARY};
  border-radius: 48px;
  align-items: center;
  justify-content: center;
`;

export const ShadowStyle: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
