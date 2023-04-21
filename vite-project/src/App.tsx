import { Sidebar } from "./layout/sidebar";
import { Main } from "./layout/main";
import { useState } from "react";

function App() {
  let [totalAmount, setTotalAmount] = useState(0);

  return (
    <>
      <div className="bg-red-500 grid grid-cols-1 md:grid-cols-3">
        <Main totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
        <Sidebar totalAmount={totalAmount} />
      </div>
    </>
  );
}
export default App;
