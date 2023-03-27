import { Image } from "react-native";
import Button from "../../../components/button/button";
import Card from "../../../components/card/card";
import TextInput from "../../../components/textInput/textInput";
import TimeLine from "../../../components/timeline/timeLine";
import {
  Container,
  Spacer,
  ContainerButton,
  ElementContainer,
  IconContainer,
  Information,
  Title,
  Detail,
  Track,
  TrackContainer,
  TitleTrack,
  DetailTrack,
  Icon,
} from "./parcel.presets";

export default function ParcelSheetContent({
  next = "detail",
  onNext,
  onDetail,
  data = [],
}: any) {
  if (next === "detail") {
    return (
      <Container>
        <TrackContainer>
          <Track>
            <Icon>
              <Image
                source={require("../../../images/parcel.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </Icon>
            <TitleTrack value="641DB7B2FC13" />
            <DetailTrack value="ID" />
          </Track>
          <Track>
            <Icon>
              <Image
                source={require("../../../images/carrier.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </Icon>
            <TitleTrack value="HET32R0G0U78" />
            <DetailTrack value="Carrier ID" />
          </Track>
          <Track>
            <Icon>
              <Image
                source={require("../../../images/time.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </Icon>
            <TitleTrack value="25/03/2023" />
            <DetailTrack value="Parcel pickup" />
          </Track>
        </TrackContainer>
        <Spacer />
        <TimeLine data={data} />
        <Spacer />
      </Container>
    );
  }

  if (next === "carrier") {
    return (
      <Container>
        <Spacer />
        <TextInput value="HET32R0G0U78" label="Carrier" select />
        <Spacer />
        <ContainerButton>
          <Button label="VIEW DETAILS" onPress={onDetail} />
        </ContainerButton>
      </Container>
    );
  }

  if (next === "parcel") {
    return (
      <Container>
        <Card>
          <ElementContainer>
            <IconContainer>
              <Image
                source={require("../../../images/parcel.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </IconContainer>
            <Information>
              <Title value="641DB7B2FC13" />
              <Detail value="The carrier will pick up the parcel today at" />
              <Detail value="10:22 AM" />
            </Information>
          </ElementContainer>
        </Card>
        <ContainerButton>
          <Button label="NEXT" onPress={onNext} />
        </ContainerButton>
      </Container>
    );
  }

  return null;
}
