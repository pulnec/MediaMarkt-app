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
import BottomSheet from "../../components/bottomSheet/bottomSheet";
import ParcelSheetContent from "./parcel/parcel.sheet";

const { width } = Dimensions.get("screen");
const FACTOR = 0.8;
const CAMERA_SIZE = width * FACTOR;
const AJUST_SIZE = {
  width: 5,
  height: 15,
};

const TITLE_SHEET: any = {
  parcel: "Parcel added successfully",
  carrier: "Carrier information",
  detail: "Parcel added successfully",
};

const dataDetail = [
  {
    id: 1,
    title: "Parcel pick up",
    detail1: "Parcel at Seur center",
    detail2: "Parcel delivery at client’s home",
    current: true,
  },
  {
    id: 2,
    title: "Parcel pick up",
    detail1: "Parcel at Seur center",
    detail2: "Parcel delivery at client’s home",
    current: true,
  },
  {
    id: 2,
    title: "Parcel pick up",
    detail1: "Parcel at Seur center",
    detail2: "Parcel delivery at client’s home",
    current: false,
  },
];

export default function Scan() {
  const [scanEnabled, setScanEnabled] = useState(true);
  const [data, setData] = useState<BarCodeScanningResult | null>(null);
  const [openSheet, setOpenSheet] = useState(false);
  const [sheetType, setSheetType] = useState("parcel");

  const openSheetAction = () => {
    setOpenSheet(!openSheet);
  };

  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    if (data && scanEnabled) {
      setScanEnabled(false);
      openSheetAction();
    }
  }, [data]);

  useEffect(() => {
    if (!openSheet) {
      setData(null);
      setScanEnabled(true);
      setSheetType("parcel");
    }
  }, [openSheet]);

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
      <BottomSheet
        isVisible={openSheet}
        closeAction={openSheetAction}
        title={TITLE_SHEET[sheetType]}
        underline={true}
      >
        <ParcelSheetContent
          onNext={() => setSheetType("carrier")}
          onDetail={() => setSheetType("detail")}
          next={sheetType}
          data={dataDetail}
        />
      </BottomSheet>
    </ScreenLayout>
  );
}
