import { useContext } from "react";
import { numberContext } from "./App";

function Calculate() {
  const numbercontext = useContext(numberContext);
  return (
    <>
      <div className="title">Sayı : {numbercontext.count}</div>
      <div className="button">
        <button onClick={() => numbercontext.dispatch("increment")}>
          Arttır
        </button>
        <button onClick={() => numbercontext.dispatch("decrement")}>
          Azalt
        </button>
        <button onClick={() => numbercontext.dispatch("reset")}>Sıfırla</button>
      </div>
    </>
  );
}

export default Calculate;

//hesaplama yapan bir reducer var başlangıç değeri initialValue
//var olan değer state güncel değer action.
