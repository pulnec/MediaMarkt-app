import { View, Text, Dimensions } from "react-native";
import React from "react";
import ScreenLayout from "../../components/layout/screenLayout";
import { Camera, CameraType, BarCodeScanningResult } from "expo-camera";
import { useEffect, useState } from "react";
import {
  Container,
  ContainerCamera,
  Frame,
  FooterText,
  Information,
} from "./scan.presets";
import Icons from "../../components/icons";

const { width } = Dimensions.get("screen");
const FACTOR = 0.8;
const CAMERA_SIZE = width * FACTOR;
const AJUST_SIZE = {
  width: 5,
  height: 15,
};

export default function Scan() {
  const [scanEnabled, setScanEnabled] = useState(true);
  const [data, setData] = useState<BarCodeScanningResult | null>(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  const getInformation = () => {
    return permission?.granted
      ? "Please hold the camera at the barcode"
      : "Please enabled permission camera in settings";
  };

  return (
    <ScreenLayout noPaddingHorizontal={true}>
      {permission?.granted && (
        <Container>
          <Frame>
            <Icons.ScanFrame width={CAMERA_SIZE} height={CAMERA_SIZE} />
          </Frame>
          <ContainerCamera>
            <Camera
              onBarCodeScanned={(scanResponse) => {
                if (scanResponse.data !== "") {
                  setScanEnabled(false);
                  setData(scanResponse);
                }
              }}
              style={{
                width: CAMERA_SIZE - AJUST_SIZE.width,
                height: CAMERA_SIZE - AJUST_SIZE.height,
              }}
            />
          </ContainerCamera>
          <FooterText>
            <Information value={getInformation()} />
          </FooterText>
        </Container>
      )}
    </ScreenLayout>
  );
}
