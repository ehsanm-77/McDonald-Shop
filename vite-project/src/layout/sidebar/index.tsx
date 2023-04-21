import { Button } from '../../components/Button/Button';
import { useState } from 'react';

type sideBar = {
  totalAmount: number;
  discount?: string;
  discountAmount: number;
  setTotalAmount?: React.Dispatch<React.SetStateAction<number>> | undefined;
};

export const Sidebar = ({ totalAmount, discountAmount }: sideBar) => {
  // eslint-disable-next-line no-constant-condition
  let [discountValue, setdiscountValue] = useState('');
  let [discountAmounts, setdicountAmounts] = useState(0);

  const renderDiscount = () => {
    if (discountValue == 'gold') {
      setdicountAmounts((discountAmounts = (totalAmount * 30) / 100));
      console.log(discountAmount);
    } else if (discountValue == 'silver') {
      setdicountAmounts((discountAmounts = (totalAmount * 20) / 100));
    } else if (discountValue == 'bronze') {
      setdicountAmounts((discountAmounts = (totalAmount * 15) / 100));
    } else {
      discountAmount = 0;
    }
  };
  console.log(discountAmount);
  return (
    <>
      <div className="col-span-1 bg-[#45c5c1] p-5 m-5 rounded-xl md:h-96 shadow-xl">
        <div className=" flex flex-col gap-3">
          <div className="flex justify-between text-xl">
            <span>جمع کل سفارشات:</span>
            <span>{totalAmount} تومان</span>
          </div>
          <div className="flex justify-between text-xl">
            <span>حق سرویس و کارمزد:</span>
            <span>{(totalAmount * 30) / 1000} تومان</span>
          </div>
          <div className="flex justify-between text-xl">
            <span>تخفیف: </span>
            <span>{discountAmounts} تومان</span>
          </div>
          <div className="w-full flex">
            <input
              type="text"
              name="text"
              value={discountValue}
              onChange={(e) => {
                setdiscountValue((discountValue = e.target.value));
              }}
              className="p-2 flex-1 rounded-r-md focus:outline-none"
              placeholder="کد تخفیف"
            />
            <Button
              style={'bg-[#028090] rounded-l-md p-2 px-3 text-white'}
              children={'✔'}
              onClick={() => {
                renderDiscount();
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-20">
          <div className="flex justify-between text-xl bg-[#ffdd00] py-1 px-3 rounded-md">
            <span>مبلغ قابل پرداخت: </span>
            <span>
              {totalAmount + (totalAmount * 30) / 1000 - discountAmounts} تومان
            </span>
          </div>
          <div>
            <Button
              style={'bg-[#028090] rounded-md w-full py-3 text-white shadow-xl'}
              children={'ثبت سفارش'}
            />
          </div>
        </div>
      </div>
    </>
  );
};
