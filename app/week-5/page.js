
import ItemList from "./itemList";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 bg-red-400">
      <h1 className="text-6xl my-5 text-black items-center">Shopping List</h1>
      <div className="flex flex-col gap-5 text-black items-center">
        {<ItemList />}
      </div>
    </div>
  );
};

export default page;
