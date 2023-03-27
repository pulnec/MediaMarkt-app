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

export const FrameSigner = styled.View`
  border-width: 1px;
  border-color: ${COLORS.TERTIARY};
  border-radius: 5px;
  height: ${hp(240)}px;
  padding: 2px;
`;

export const LabelContanier = styled.View`
  padding: 0px 4px;
  height: 20px;
  position: absolute;
  top: -11px;
  left: 18px;
  z-index: 1;
`;

export const EmptyView = styled.View`
  background-color: ${COLORS.BACKGROUND.PRIMARY};
  height: 5px;
  position: absolute;
  width: 115px;
  top: 7px;
`;
