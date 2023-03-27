import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { Container, Title, Header, Underline } from "./bottomSheet.presets";

export default function BottomSheet({
  children,
  title,
  isVisible,
  closeAction,
  underline = false,
}: any) {
  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0 }}
      onBackdropPress={closeAction}
    >
      <Container>
        <Header>
          <Title value={title} />
        </Header>
        {underline && <Underline />}
        {children}
      </Container>
    </Modal>
  );
}
