import { useReducer, useMemo } from "react";

import rootReducer from "reducers";
import middleware from "./middleware";

import initialStore from "./initialStore";

const buildStore = () => {
  const [store, dispatch] = useReducer(rootReducer, initialStore);
  const useMiddleware = (action) => middleware(action)(dispatch);
  const _store = useMemo(() => ({ store, dispatch: useMiddleware }), [store]);

  return _store;
};

export default buildStore;
