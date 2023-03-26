import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Text from "../../components/text/text";
import { COLORS } from "../../utils/colors";
import {
  normalizeHorizontal as wp,
  normalizeVertical as hp,
  normalizeFont as nf,
} from "../../utils/normalize";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.BACKGROUND.SECONDARY};
  flex: 1;
`;

export const ContainerCamera = styled.View`
  overflow: hidden;
  border-radius: 30px;
`;

export const Frame = styled.View`
  position: absolute;
  z-index: 1;
`;

export const FooterText = styled.View`
  position: absolute;
  bottom: ${hp(50)}px;
`;

export const Information = styled(Text)`
  font-size: ${nf(14)}px;
  font-weight: 400;
  color: ${COLORS.SECONDARY};
`;
