import { View, Text, FlatList } from "react-native";
import ScreenLayout from "../../components/layout/screenLayout";
import CircleButton from "../../components/circleButton/circleButton";
import {
  Footer,
  Container,
  Information,
  ItemText,
} from "./parcelDetail.presets";
import ListItem from "../../components/listItem/listItem";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import BottomSheet from "../../components/bottomSheet/bottomSheet";
import DeliverySheetContent from "./delivery/delivery.sheet";
import { useState, useEffect } from "react";
import { showAlert } from "../../redux/slices/app.slice";

const data = [
  {
    id: 1,
    title: "641DB7B2FC13 Parcel List",
    sub1: "Seur",
    sub2: "5 items to be picked up",
  },
  {
    id: 2,
    title: "641DB7B2FC13 Parcel List",
    sub1: "Seur",
    sub2: "5 items to be picked up",
  },
];

const SHEET_TYPE: any = {
  delivery: "Delivery information",
  signer: "Driver’s signature",
};

export default function ParcelDetail() {
  const [openSheet, setOpenSheet] = useState(false);
  const [sheetType, setSheetType] = useState("delivery");

  const openSheetAction = () => {
    setOpenSheet(!openSheet);
  };

  const deliverySave = () => {
    openSheetAction();
  };

  useEffect(() => {
    if (!openSheet) {
      setSheetType("delivery");
    }
  }, [openSheet]);

  return (
    <ScreenLayout>
      <Container>
        <Information>
          <ItemText value="14 items to be picked up" />
        </Information>
        <FlatList
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            const { title, sub1, sub2 } = item;
            return (
              <ListItem
                key={item.id}
                title={title}
                primarySubTitle={sub1}
                secondarySubTitle={sub2}
                textRight={"DELIVERY"}
                icon="carrier"
              />
            );
          }}
        />
      </Container>
      <Footer>
        <Button label="DELIVERY" onPress={openSheetAction} />
      </Footer>
      <BottomSheet
        isVisible={openSheet}
        closeAction={openSheetAction}
        title={SHEET_TYPE[sheetType]}
      >
        <DeliverySheetContent
          onPress={openSheetAction}
          onDeliverySave={deliverySave}
          onChangeType={setSheetType}
          type={sheetType}
        />
      </BottomSheet>
    </ScreenLayout>
  );
}
