// const initialState = 0;

// const changeTheNumber =(state=initialState,action)=>{
//     switch(action.type){
//         case "INCREMENT": return state+1;
//         case "DECREMENT": return state-1;
//         default: return state;
//     }
// }
// export default changeTheNumber;

const initialState=0;
const counter =(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state+5;
        case "DECREMENT":
            return state-5;
        default:
            return state;
    }
}

export default counter;