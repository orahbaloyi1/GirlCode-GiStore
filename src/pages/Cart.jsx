import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";

const Cart = () => {
  const [currCart, setCurrCart] = useState([]);
  const [currTotal, setCurrTotal] = useState(0);

  useEffect(() => {
    const cartArray = JSON.parse(localStorage.getItem("cart")) ?? [];

    const total = cartArray.reduce(
      (acc, currProd) => acc + currProd.prod_price,
      0
    );

    setCurrTotal(total);

    setCurrCart(cartArray);
  }, []);

  return (
    <MainLayout>
      <section className="pt-20">
        <div className="container mx-auto">
          {currCart.map((currProd) => (
            <div className="h-48 flex justify-between border-t-2 border-gray-400 items-center">
              <div className="flex gap-2  items-center">
                <div className=" w-40 h-32 ">
                  <img
                    className="rounded-xl"
                    src={`http://127.0.0.1:5000/image/${currProd.prod_img}`}
                    alt={currProd.prod_name}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl">{currProd.prod_name}</h1>
                  <p className="">{currProd.prod_desc}</p>
                </div>
              </div>
              <div className=" ">
                <button className=" text-base border border-black rounded-md hover:bg-girlcode-pink hover:border-girlcode-pink hover:text-white font-bold py-1 px-1 text-girlcode-pink border-gray-300 ">
                  {currProd.count}
                </button>
                <span className="material-symbols-outlined align-middle">
                  expand_more
                </span>
                <button
                  className="text-girlcode-pink font-bold mt-11 hover:bg-girlcode-pink block w-fit hover:text-white py-1 px-2 "
                  onClick={() => handleDelete(t.id)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))}
          <div className="border-t-2 border-gray-400 flex justify-between items-center ">
            <p className="text-left font-bold text-xl">Total:</p>
            <span className="text-center font-bold">R{currTotal}</span>
          </div>

          <div className="mt-10">
            <button className="border border-black rounded-3xl block w-fit hover:bg-girlcode-pink hover:border-girlcode-pink hover:text-white font-bold py-2 px-20 ">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
