// import { combineReducers } from "redux";
// import changeTheNumber from "./upDown";

// const rootReducer = combineReducers({
//     changeTheNumber
// })

// export default rootReducer;


import { combineReducers } from "redux";
import counter from "./upDown";

const rootReducer = combineReducers({
    counter
})
export default rootReducer;