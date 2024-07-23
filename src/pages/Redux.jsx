// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decNumber, incNumber, resetNumber } from "../redux/action";

// function Redux() {
//   const myState = useSelector((state) => state.changeTheNumber);
//   console.log("myState: ",myState)
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <div className="App">
//         <h2>Increment / Decrement Counter</h2>
//         <h4>Using React and Redux</h4>

//         <div className="quantity">
//           <button
//             className="quantity_minus"
//             title="Decrement"
//             onClick={() => dispatch(decNumber())}
//           >
//             <span> - </span>
//           </button>
//           <input
//             name="quantity"
//             type="text"
//             className="quantity_input"
//             onChange={(e)=>myState}
//             // value={myState}
//           />
//           <button
//             className="quantity_plus"
//             title="Increament"
//             onClick={() => dispatch(incNumber())}
//           >
//             <span> + </span>
//           </button>
//           <button
//             className="quantity_plus"
//             title="Reset Count"
//             onClick={() => dispatch(resetNumber())}
//           >
//             <span> Reset </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Redux;
