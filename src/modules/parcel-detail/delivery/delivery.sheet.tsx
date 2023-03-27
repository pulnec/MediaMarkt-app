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

const style = `.m-signature-pad { background-color: ${COLORS.BACKGROUND.TERTIARY}; border: none; }`;

export default function DeliverySheetContent({ onPress }: any) {
  const [contentType, setContentType] = useState("delivery");

  const ref = useRef<any>();

  const resetSigner = () => {
    if (ref.current) {
      ref.current.clearSignature();
    }
  };

  const completeSigned = (signature: string) => {
    console.log(signature);
  };

  const handleEnd = () => {
    ref.current.readSignature();
  };

  const goSign = () => setContentType("signer");

  if (contentType === "signer") {
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
            autoClear={false}
            webStyle={style}
          />
        </FrameSigner>
        <Spacer />
        <ContainerButton>
          <Button label="RESET" onPress={resetSigner} />
          <Spacer />
          <Button label="SAVE" onPress={() => onPress()} />
        </ContainerButton>
      </Container>
    );
  }

  if (contentType === "delivery") {
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
