import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Text from "../../../components/text/text";
import { COLORS } from "../../../utils/colors";
import { normalizeFont } from "../../../utils/normalize";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../../utils/normalize";
Text;

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

export const ElementContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const IconContainer = styled.View`
  width: ${wp(50)}px;
  height: ${wp(50)}px;
  margin-right: ${wp(12)}px;
`;
export const Information = styled.View``;

export const Title = styled(Text)`
  font-weight: 500;
  font-size: ${nf(16)}px;
`;
export const Detail = styled(Text)`
  font-weight: 400;
  font-size: ${nf(10)}px;
`;

export const TrackContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.TERTIARY};
  padding-bottom: ${wp(14)}px;
`;

export const Track = styled.View`
  flex: 1;
  align-items: center;
`;

export const Icon = styled.View`
  width: ${wp(50)}px;
  height: ${wp(50)}px;
  margin-bottom: ${wp(12)}px;
`;
export const TitleTrack = styled(Text)`
  width: 100%;
  text-align: center;
  font-size: ${nf(14)}px;
  font-weight: 500;
`;
export const DetailTrack = styled(Text)`
  width: 100%;
  text-align: center;
  font-size: ${nf(10)}px;
  font-weight: 400;
`;
