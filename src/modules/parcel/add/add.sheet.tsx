import { View, Text } from "react-native";
import Button from "../../../components/button/button";
import TextInput from "../../../components/textInput/textInput";
import { Container, Spacer, ContainerButton } from "./addSheet.presets";

export default function AddSheetContent() {
  return (
    <Container>
      <TextInput label="ID" />
      <Spacer />
      <TextInput label="Carrier ID" select />
      <Spacer />
      <ContainerButton>
        <Button label="ADD" />
      </ContainerButton>
    </Container>
  );
}
