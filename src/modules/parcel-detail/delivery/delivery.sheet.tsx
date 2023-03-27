import Button from "../../../components/button/button";
import TextInput from "../../../components/textInput/textInput";
import {
  Container,
  Spacer,
  ContainerButton,
  FrameSigner,
  LabelContanier,
  EmptyView,
} from "./delivery.presets";
import { useState, useRef } from "react";
import SignatureScreen from "react-native-signature-canvas";
import { COLORS } from "../../../utils/colors";
import Text from "../../../components/text/text";
import { showAlert } from "../../../redux/slices/app.slice";
import { useDispatch } from "react-redux";

const style = `.m-signature-pad { background-color: ${COLORS.BACKGROUND.TERTIARY}; border: none; }`;

const alertParams = {
  isVisible: true,
  type: "wrong",
  text: "Some information is wrong",
  buttonLabel: "BACK",
};

export default function DeliverySheetContent({
  onPress,
  onDeliverySave,
  onChangeType,
  type,
}: any) {
  const dispatch = useDispatch();
  const [signData, setSignData] = useState<string | null>(null);

  const ref = useRef<any>();

  const resetSigner = () => {
    if (ref.current) {
      ref.current.clearSignature();
    }
  };

  const completeSigned = (signature: string) => {
    setSignData(signature);
  };

  const handleEnd = () => {
    ref.current.readSignature();
  };

  const goSign = () => onChangeType("signer");

  const save = () => {
    if (signData) {
      onDeliverySave();
    } else {
      dispatch(showAlert(alertParams));
    }
  };

  const handleClear = () => {
    setSignData(null);
  };

  if (type === "signer") {
    return (
      <Container>
        <FrameSigner>
          <LabelContanier>
            <EmptyView />
            <Text value="Driver’s signature" />
          </LabelContanier>
          <SignatureScreen
            ref={ref}
            onEnd={handleEnd}
            onOK={completeSigned}
            onClear={handleClear}
            autoClear={false}
            webStyle={style}
          />
        </FrameSigner>
        <Spacer />
        <ContainerButton>
          <Button label="RESET" onPress={resetSigner} preset="secondary" />
          <Spacer />
          <Button label="SAVE" onPress={save} />
        </ContainerButton>
      </Container>
    );
  }

  if (type === "delivery") {
    return (
      <Container>
        <TextInput label="Driver’s name" value="641DB7B2FC13" />
        <Spacer />
        <TextInput label="License plate" select value="HET32R0G0U78" />
        <Spacer />
        <ContainerButton>
          <Button label="NEXT" onPress={goSign} />
        </ContainerButton>
      </Container>
    );
  }

  return null;
}
