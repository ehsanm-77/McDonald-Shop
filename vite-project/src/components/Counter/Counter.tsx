import { Button } from "../Button/Button";

interface Iprops {
  setNum: React.Dispatch<React.SetStateAction<number>>;
  singleProductPrice: number;
  num: number;
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}

export const Counter = ({
  setNum,
  num,
  singleProductPrice,
  totalAmount,
  setTotalAmount,
}: Iprops) => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          setNum(num + 1);
          setTotalAmount(totalAmount + singleProductPrice);
        }}
        style={
          "rounded-r-md text-white bg-red-500 w-6 flex items-center justify-center"
        }
        children={"+"}
      />
      <span className="px-1">{num}</span>
      <Button
        onClick={() => {
          if (num > 0) {
            setNum(num - 1);
            setTotalAmount(totalAmount - singleProductPrice);
          }
        }}
        style={
          "rounded-l-md text-white bg-red-500 w-6 flex items-center justify-center"
        }
        children={"-"}
      />
    </div>
  );
};
