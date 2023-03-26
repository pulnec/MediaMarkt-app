import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import AppNavigation from "./src/navigation/app.navigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
