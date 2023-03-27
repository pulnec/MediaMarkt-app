import { ViewStyle, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";
import Text from "../text/text";

export const Container = styled(TouchableOpacity)`
  background-color: ${COLORS.PRIMARY};
  height: ${hp(45)}px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
`;

export const ContainerSecondary = styled(TouchableOpacity)`
  height: ${hp(45)}px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
`;

export const Label = styled(Text)`
  color: ${COLORS.SECONDARY};
  font-size: ${nf(14)}px;
  font-weight: 500;
`;

export const LabelSecondary = styled(Text)`
  color: ${COLORS.PRIMARY};
  font-size: ${nf(14)}px;
  font-weight: 500;
`;

export const ShadowStyle: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
