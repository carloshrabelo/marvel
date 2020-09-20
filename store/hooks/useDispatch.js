import { useContext } from "react";
import StoreContext from "../StoreContext";

const useDispatch = () => useContext(StoreContext).dispatch;
export default useDispatch;
