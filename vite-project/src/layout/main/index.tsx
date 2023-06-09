import { Card } from '../../components/Card/Card';
import { data } from '../../data/data';

type main = {
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const Main = ({ totalAmount, setTotalAmount }: main) => {
  const renderData = (
    data: {
      id: number;
      title: string;
      price: number;
      image: string;
    }[]
  ) => {
    return data.map((item) => {
      // console.log(item);
      return (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          src={item.image}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
        />
      );
    });
  };
  // console.log(totalAmount);
  // console.log(renderData(data));
  return (
    <>
      <main className="col-span-2 bg-[#45c5c1] p-5 m-5 rounded-xl shadow-xl">
        <div className="w-full text-center mb-5 text-2xl font-bold pb-4 text-white">
          رستوران مک دونالد شعبه تهران
        </div>
        <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 h-[450px] overflow-scroll overflow-x-hidden px-2">
          {renderData(data)}
        </div>
      </main>
    </>
  );
};
