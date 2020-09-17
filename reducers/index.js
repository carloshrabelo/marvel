import combineReducers from "helpers/combineReducers";

import comic from "./comic";
import comics from "./comics";
import heroes from "./heroes";

export default combineReducers({ comics, comic, heroes });
