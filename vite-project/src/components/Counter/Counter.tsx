import { Button } from '../Button/Button';

interface Iprops {
  setNum: React.Dispatch<React.SetStateAction<number>>;
  num: number;
}

export const Counter = ({ setNum, num }: Iprops) => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          if (num > 0) {
            return setNum(num - 1);
          }
        }}
        style={
          'rounded-r-md text-white bg-red-500 w-6 flex items-center justify-center'
        }
        children={'-'}
      />
      <span className="px-1">{num}</span>
      <Button
        onClick={() => {
          return setNum(num + 1);
        }}
        style={
          'rounded-l-md text-white bg-red-500 w-6 flex items-center justify-center'
        }
        children={'+'}
      />
    </div>
  );
};
