import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Component6 from "./Component6";

const Component5 = () => {
  const { f } = useContext(AppContext);

  return (
    <>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </>
  );
};

export default Component5;
