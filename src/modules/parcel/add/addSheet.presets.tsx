import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
} from "../../../utils/normalize";

const { width } = Dimensions.get("screen");

export const Container = styled.View`
  flex: 1;
  padding-top: ${wp(18)}px;
`;
export const Spacer = styled.View`
  width: 100%;
  margin-top: ${wp(24)}px;
`;

export const ContainerButton = styled.View`
  margin-top: ${wp(24)}px;
`;
