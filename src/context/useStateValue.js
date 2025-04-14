import { useContext } from "react";
import { StateContext } from "./stateContext";

const useStateValue = () => useContext(StateContext);

export default useStateValue;
