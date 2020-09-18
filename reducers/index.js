import combineReducers from "helpers/combineReducers";

import comic from "./comic";
import comics from "./comics";
import character from "./character";
import characters from "./characters";

export default combineReducers({ comics, comic, character, characters });
