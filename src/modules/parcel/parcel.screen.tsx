import { View, Text, FlatList } from "react-native";
import ScreenLayout from "../../components/layout/screenLayout";
import CircleButton from "../../components/circleButton/circleButton";
import { Footer, Container } from "./parcel.presets";
import ListItem from "../../components/listItem/listItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useId } from "react";
import { fetchParcel } from "../../redux/slices/parcels.slice";
import { fetchCarriers } from "../../redux/slices/carriers.slice";
import { fetchItems } from "../../redux/slices/items.slice";
import BottomSheet from "../../components/bottomSheet/bottomSheet";
import AddSheetContent from "./add/add.sheet";

export default function Parcel() {
  const dispatch = useDispatch();
  const [openSheet, setOpenSheet] = useState(false);
  const { parcel } = useSelector((state: any) => state.parcels);

  const openSheetAction = () => {
    setOpenSheet(!openSheet);
  };

  const getData = () => {
    dispatch(fetchParcel() as any);
    dispatch(fetchCarriers() as any);
    dispatch(fetchItems() as any);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScreenLayout>
      <Container>
        <FlatList
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          data={parcel}
          keyExtractor={(item) => item.id.$oid}
          renderItem={({ item, index }) => {
            const { deliveryDate, itemsCount, pickupDate } = item;
            return (
              <ListItem
                key={item.id.$oid}
                title={`Parcel List ${deliveryDate}`}
                primarySubTitle={`${0} carriers picked up the parcel on ${pickupDate}`}
                secondarySubTitle={`${itemsCount} items`}
                textRight={deliveryDate}
              />
            );
          }}
        />
      </Container>
      <Footer>
        <CircleButton onPress={openSheetAction} />
      </Footer>
      <BottomSheet
        isVisible={openSheet}
        closeAction={openSheetAction}
        title="Parcel and carrier information"
      >
        <AddSheetContent />
      </BottomSheet>
    </ScreenLayout>
  );
}
