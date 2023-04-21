import { Counter } from '../Counter/Counter';
import { useState } from 'react';

type card = {
  title: string;
  price: number;
  src: string;
};

export const Card = (props: card) => {
  const [num, setNum] = useState(0);
  return (
    <div className="w-full flex justify-between bg-white p-3 rounded-md col-span-1">
      <div className="w-full flex gap-3">
        <div>
          <img src={props.src} className="w-20 h-full" alt="" />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <div className="text-lg font-semibold">{props.title}</div>
            <div className="text-lg">تومان {props.price}</div>
          </div>
          <div className="w-full flex">
            <Counter num={num} setNum={setNum} />
            <div className="mr-auto">تومان 0</div>
          </div>
        </div>
      </div>
    </div>
  );
};
