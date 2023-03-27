import { Dimensions, Pressable, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";
import Text from "../text/text";

export const Container = styled.View`
  background-color: ${COLORS.BACKGROUND.PRIMARY};
  width: 90%;
  border-radius: 30px;
  padding: ${wp(42)}px ${wp(24)}px;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: ${wp(120)}px;
  height: ${wp(120)}px;
`;

export const TextContainer = styled.View`
  margin: ${wp(24)}px 0px;
  width: 90%;
`;
export const ButtonContainer = styled.View`
  width: 100%;
`;
export const InfoText = styled(Text)`
  font-size: ${nf(18)}px;
  font-weight: 400;
  text-align: center;
`;
