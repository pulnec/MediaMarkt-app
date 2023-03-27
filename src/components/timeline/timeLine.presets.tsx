import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";
import Text from "../text/text";

export const TimeLineContainer = styled.View`
  margin-left: ${wp(45)}px;
  flex-direction: row;
`;

export const InformationContainer = styled.View`
  align-items: flex-start;
  margin-bottom: ${wp(14)}px;
`;

export const Title = styled(Text)`
  text-align: center;
  font-size: ${nf(14)}px;
  font-weight: 500;
`;
export const Detail = styled(Text)`
  text-align: center;
  font-size: ${nf(10)}px;
  font-weight: 400;
`;

export const LineContainer = styled.View`
  align-items: center;
  margin-right: ${wp(10)}px;
`;
export const Circle = styled.View`
  width: ${wp(25)}px;
  height: ${wp(25)}px;
  background-color: ${COLORS.PRIMARY};
  border-radius: ${wp(25)}px;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.View`
  width: ${wp(3)}px;
  height: ${wp(30)}px;
  background-color: ${COLORS.PRIMARY};
  margin: ${wp(4)}px 0px;
  border-radius: ${wp(10)}px;
`;

export const LineDisabled = styled.View`
  width: ${wp(3)}px;
  height: ${wp(30)}px;
  background-color: #fbe0e0;
  margin: ${wp(4)}px 0px;
  border-radius: ${wp(10)}px;
`;

export const ContainerBox = styled.View`
  flex-direction: column;
`;

export const CircleDisabled = styled.View`
  width: ${wp(25)}px;
  height: ${wp(25)}px;
  border-width: 5px;
  border-color: #fbe0e0;
  border-radius: ${wp(25)}px;
`;
