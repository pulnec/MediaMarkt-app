import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";
import Text from "../text/text";

export const Container = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${COLORS.TERTIARY};
  height: ${hp(60)}px;
  border-radius: 5px;
  flex-direction: row;
`;
export const LabelContanier = styled.View`
  background-color: ${COLORS.SECONDARY};
  padding: 0px 4px;
  height: 20px;
  position: absolute;
  top: -9px;
  left: 18px;
`;

export const InputContainer = styled.View`
  justify-content: center;
  height: ${hp(60)}px;
  flex: 1;
`;
export const OnlyText = styled(Text)`
  font-size: ${nf(16)}px;
  padding: 0 ${wp(12)}px;
  width: 100%;
`;

export const IconContainer = styled.View`
  height: ${wp(55)}px;
  width: ${wp(45)}px;
  align-items: center;
  justify-content: center;
`;
