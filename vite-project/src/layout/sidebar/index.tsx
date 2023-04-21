import { Button } from '../../components/Button/Button';
export const Sidebar = () => {
  return (
    <>
      <div className="col-span-1 bg-[#F0F8FF] p-5 m-5 rounded-xl md:h-96">
        <div className=" flex flex-col gap-3">
          <div className="flex justify-between text-xl">
            <span>جمع کل سفارشات:</span>
            <span>0 تومان</span>
          </div>
          <div className="flex justify-between text-xl">
            <span>حق سرویس و کارمزد:</span>
            <span>0 تومان</span>
          </div>
          <div className="flex justify-between text-xl">
            <span>تخفیف: </span>
            <span>0 تومان</span>
          </div>
          <div className="w-full flex">
            <input
              type="text"
              className="p-2 flex-1 rounded-r-md focus:outline-none"
              placeholder="کد تخفیف"
            />
            <Button
              style={'bg-red-700 rounded-l-md p-2 px-3 text-white'}
              children={'✔'}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <div className="flex justify-between text-xl bg-yellow-300 py-1 px-3 rounded-md">
            <span>مبلغ قابل پرداخت: </span>
            <span>0 تومان</span>
          </div>
          <div>
            <Button
              style={'bg-red-700 rounded-md w-full py-3 text-white'}
              children={'ثبت سفارش'}
            />
          </div>
        </div>
      </div>
    </>
  );
};
