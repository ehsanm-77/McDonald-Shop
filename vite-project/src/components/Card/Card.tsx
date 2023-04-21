import { Counter } from '../Counter/Counter';
import { useState } from 'react';

type card = {
  title: string;
  price: number;
  src: string;
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const Card = ({
  title,
  src,
  price,
  totalAmount,
  setTotalAmount,
}: card) => {
  const [num, setNum] = useState(0);

  return (
    <div className="w-full flex justify-between bg-[#e3f2fd] p-3 rounded-xl col-span-1 shadow-xl">
      <div className="w-full flex gap-3">
        <div className=" my-auto">
          <img src={src} className="w-24 h-20 rounded-xl" alt="" />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-lg">{price} تومان</div>
          </div>
          <div className="w-full flex">
            <Counter
              singleProductPrice={price}
              num={num}
              setNum={setNum}
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
            <div className="mr-auto">{price * num} تومان</div>
          </div>
        </div>
      </div>
    </div>
  );
};
