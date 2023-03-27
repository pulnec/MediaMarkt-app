import Button from "../../../components/button/button";
import TextInput from "../../../components/textInput/textInput";
import { Container, Spacer, ContainerButton } from "./addSheet.presets";

export default function AddSheetContent({ onPress }: any) {
  return (
    <Container>
      <TextInput label="ID" value="641DB7B2FC13" />
      <Spacer />
      <TextInput label="Carrier ID" select value="HET32R0G0U78" />
      <Spacer />
      <ContainerButton>
        <Button label="ADD" onPress={onPress} />
      </ContainerButton>
    </Container>
  );
}
