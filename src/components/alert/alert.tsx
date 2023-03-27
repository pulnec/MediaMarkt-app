import { View, Text, Image } from "react-native";
import Modal from "react-native-modal";
import Button from "../button/button";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  TextContainer,
  InfoText,
  IconContainer,
  ButtonContainer,
} from "./alert.presets";
import { popToTop } from "../../navigation/service/navigation.service";
import { resetAlert } from "../../redux/slices/app.slice";

const IMAGES: any = {
  success: require("../../images/success.png"),
  wrong: require("../../images/wrong.png"),
};

export default function Alert() {
  const dispatch = useDispatch();
  const { error } = useSelector((state: any) => state.app);

  const buttonAction = () => {
    if (error.type === "success") {
      popToTop();
    }
    dispatch(resetAlert());
  };

  return (
    <Modal isVisible={error.isVisible} style={{ alignItems: "center" }}>
      <Container>
        <IconContainer>
          <Image
            source={IMAGES[error.type]}
            style={{ width: "100%", height: "100%" }}
          />
        </IconContainer>
        <TextContainer>
          <InfoText value={error.text} />
        </TextContainer>
        <ButtonContainer>
          <Button label={error.buttonLabel} onPress={buttonAction} />
        </ButtonContainer>
      </Container>
    </Modal>
  );
}
