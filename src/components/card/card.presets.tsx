import { ViewStyle, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";

export const Container = styled.View`
  background-color: ${COLORS.SECONDARY};
  padding: ${wp(16)}px;
  border-radius: 10px;
`;

export const ShadowStyle: ViewStyle = {
  shadowColor: "#B6B3B3",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
