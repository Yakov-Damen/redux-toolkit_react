import { Provider } from "react-redux";
import { store } from "./store";
import Background from "./components/Background";


export default function App() {
  return (
    <Provider store={store}>
      <Background/>
    </Provider>
  );
}
