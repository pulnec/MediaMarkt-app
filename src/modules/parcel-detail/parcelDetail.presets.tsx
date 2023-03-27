import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Text from "../../components/text/text";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
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
  padding: 0px ${wp(12)}px;
`;

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${hp(95)}px;
`;

export const Information = styled.View`
  padding-left: ${wp(10)}px;
  margin-bottom: ${wp(4)}px;
`;

export const ItemText = styled(Text)`
  font-size: ${nf(10)}px;
  font-weight: 400;
`;
