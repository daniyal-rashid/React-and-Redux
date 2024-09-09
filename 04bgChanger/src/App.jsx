import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gold", color: "black" }}
            onClick={() => setColor("gold")}
          >
            Gold
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "tan", color: "black" }}
            onClick={() => setColor("tan")}
          >
            tan
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "silver", color: "black" }}
            onClick={() => setColor("silver")}
          >
            Silver
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink", color: "black" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "burlywood", color: "black" }}
            onClick={() => setColor("burlywood")}
          >
            Burlywood
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lightblue", color: "black" }}
            onClick={() => setColor("lightblue")}
          >
            Lightblue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#313131" }}
            onClick={() => setColor("#313131")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";

// function Appa() {
//   const [color, setColor] = useState("olive");

//   return (
//     <div
//       className="w-full h-screen duration-200"
//       style={{ backgroundColor: color }}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//             onClick={() => setColor("red")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "red" }}
//           >
//             Red
//           </button>
//           <button
//             onClick={() => setColor("green")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "green" }}
//           >
//             Green
//           </button>
//           <button
//             onClick={() => setColor("blue")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "blue" }}
//           >
//             Blue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
