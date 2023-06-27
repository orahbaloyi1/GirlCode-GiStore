import ipodImg from "../assets/ipod.jpg";

const ProductItem = () => {
  return (
    <div className="first-col">
      <div className="relative rounded-xl overflow-hidden bg-gray-200 hover:w-200">
        <img src={ipodImg} alt="Ipod-picture" />
        <div className="rounded-full absolute top-1 right-1 bg-white hover:bg-girlcode-pink w-10 h-10 text-center cursor-pointer">
          <span className="material-symbols-outlined leading-10">favorite</span>
        </div>
      </div>
      <div className="">
        <div className=" flex justify-between items-center">
          <h3 className=" text-xl font-bold">HomePod Mini</h3>
          <div className="text-xl font-bold">
            <span className="align-top text-base">R</span>
            299
            <span className="align-top text-base">.99</span>
          </div>
        </div>
        <p className="text-sm text-gray-900">
          Table with air purifier, stained veneer/black
        </p>
        <div className="flex mb-2">
          <ul className="flex">
            <li>
              <span className="material-symbols-outlined">star</span>
            </li>
            <li>
              <span className="material-symbols-outlined">star</span>
            </li>
            <li>
              <span className="material-symbols-outlined">star</span>
            </li>
            <li>
              <span className="material-symbols-outlined">star</span>
            </li>
            <li>
              <span className="material-symbols-outlined">star</span>
            </li>
          </ul>
          <p>(121)</p>
        </div>
        <button className="border border-black rounded-3xl block w-fit py-2 px-4 hover:bg-girlcode-pink hover:border-girlcode-pink hover:text-white font-bold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
