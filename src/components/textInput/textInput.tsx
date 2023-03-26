import { TextInput as TextInputRN } from "react-native";
import Icons from "../icons";
import Text from "../text/text";
import {
  Container,
  LabelContanier,
  InputContainer,
  OnlyText,
  IconContainer,
} from "./textInput.presets";

export default function TextInput({
  label = "Label",
  placeholder,
  value = "DFADSFASADDSA",
  type = "text",
  select = false,
}: any) {
  return (
    <Container>
      <LabelContanier>
        <Text value={label} />
      </LabelContanier>
      <InputContainer>
        {type === "input" ? (
          <TextInputRN
            placeholder={placeholder}
            style={{
              height: 65,
              paddingHorizontal: 12,
              fontSize: 22,
            }}
            defaultValue={value}
          />
        ) : (
          <OnlyText value={value} />
        )}
      </InputContainer>
      {select && (
        <IconContainer>
          <Icons.ArrowIcon />
        </IconContainer>
      )}
    </Container>
  );
}
