import { Card } from '../../components/Card/Card';
import { data } from '../../data/data';

export const Main = () => {
  const renderData = (
    data: {
      id: number;
      title: string;
      price: number;
      image: string;
    }[]
  ) => {
    return data.map((item) => {
      console.log(item);
      return <Card title={item.title} price={item.price} src={item.image} />;
    });
  };
  console.log(renderData(data));
  return (
    <>
      <main className="col-span-1 bg-[#F0F8FF] p-5 m-5 rounded-xl">
        <div className="w-full text-center mb-5 text-xl font-bold">
          رستوران مک دونالد شعبه تهران
        </div>
        <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2">
          {renderData(data)}
        </div>
      </main>
    </>
  );
};
