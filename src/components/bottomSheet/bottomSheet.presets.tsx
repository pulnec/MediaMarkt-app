import { Dimensions, Pressable, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";
import Text from "../text/text";

const { height } = Dimensions.get("screen");

export const Container = styled.View`
  background-color: ${COLORS.SECONDARY};
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 0px ${wp(24)}px;
  padding-bottom: ${wp(28)}px;
`;

export const Header = styled.View`
  height: ${hp(80)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: ${nf(20)}px;
  font-weight: 500;
`;

export const Underline = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.TERTIARY};
`;
