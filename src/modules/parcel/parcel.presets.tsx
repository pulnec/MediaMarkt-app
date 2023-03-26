import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
} from "../../utils/normalize";

const { width } = Dimensions.get("screen");

export const Footer = styled.View`
  width: ${width}px;
  height: ${hp(95)}px;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.SECONDARY};
`;

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${hp(95)}px;
`;
