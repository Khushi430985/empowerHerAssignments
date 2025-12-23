import AppContextProvider from "../context/AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  return (
    <AppContextProvider>
      <Component2 />
    </AppContextProvider>
  );
};

export default Component1;
