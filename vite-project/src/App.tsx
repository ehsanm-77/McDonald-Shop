import { Sidebar } from './layout/sidebar';
import { Main } from './layout/main';
import { useState } from 'react';

function App() {
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <>
      <div className="bg-[#05668d] grid grid-cols-1 md:grid-cols-3 h-full">
        <Main totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
        <Sidebar
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          discountAmount={0}
        />
      </div>
    </>
  );
}
export default App;
