import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "../modules";
import { ROUTES } from "./routes";
import HeaderTitle from "../components/headerTitle/headerTitle";
import BackButton from "../components/backbutton/backButton";

const INITIAL_ROUTE = ROUTES.PARCEL.ROUTE;

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={INITIAL_ROUTE}
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name={ROUTES.PARCEL.ROUTE}
          component={Screen.Parcel}
          options={{
            headerTitle: (props) => (
              <HeaderTitle {...props} title={ROUTES.PARCEL.TITLE} />
            ),
          }}
        />

        <Stack.Screen
          name={ROUTES.SCAN.ROUTE}
          component={Screen.Scan}
          options={({ navigation }) => ({
            headerBackVisible: false,
            headerTitle: (props) => (
              <HeaderTitle {...props} title={ROUTES.SCAN.TITLE} back={true} />
            ),
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
