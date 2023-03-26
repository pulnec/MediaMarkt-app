import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";
import Text from "../text/text";

const { width } = Dimensions.get("screen");

export const Container = styled.View`
  min-height: ${hp(78)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.TERTIARY};
  flex-direction: row;
  padding: ${hp(12)}px;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: ${nf(16)}px;
  font-weight: 500;
`;
export const PrimarySubTitle = styled(Text)`
  font-size: ${nf(10)}px;
  font-weight: 400;
`;
export const SecondarySubTitle = styled(Text)`
  font-size: ${nf(10)}px;
  font-weight: 400;
`;

export const TextContainer = styled.View``;

export const RightContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextRight = styled(Text)`
  font-size: ${nf(10)}px;
  color: ${COLORS.PRIMARY};
  font-weight: 500;
`;
