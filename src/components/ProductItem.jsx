import prodImg from "../assets/homepad-mini.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ prod_info }) => {
  const ProdPrice = ({ price }) => {
    const [intNum, setIntNum] = useState("");
    const [centNum, setCentNum] = useState("");

    useEffect(() => {
      if (price) {
        const priceArr = price.toString().split(".");
        setIntNum(priceArr[0] ?? "00");
        setCentNum(priceArr[1] ?? "00");
      }
    }, [price]);

    return (
      <>
        <span className="align-top text-base">R</span>
        {intNum}
        <span className="align-top text-base">.{centNum}</span>
      </>
    );
  };

  const addToCart = (evt) => {
    let cartArray = JSON.parse(localStorage.getItem("cart")) ?? [];
    const prodId = evt.target.dataset.prodId;
    let foundItem = cartArray.find((prod) => Number(prodId) === prod.id);
    let foundIndex = cartArray.findIndex((prod) => Number(prodId) === prod.id);

    if (!foundItem) {
      let currProd = prod_info;
      currProd.count = 1;
      cartArray.push(currProd);

      localStorage.setItem("cart", JSON.stringify(cartArray));
    } else {
      foundItem.count = ++foundItem.count;
      cartArray[foundIndex] = foundItem;

      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
  };

  return (
    <div>
      <Link to={`/product/${prod_info.prod_slug}`}>
        <div className="relative rounded-xl overflow-hidden bg-gray-200 hover:w-200">
          <img
            src={`http://127.0.0.1:5000/image/${prod_info.prod_img}`}
            alt={prod_info.prod_name}
          />
          <div className="rounded-full absolute top-1 right-1 bg-white hover:bg-girlcode-pink w-10 h-10 text-center cursor-pointer">
            <span className="material-symbols-outlined leading-10">
              favorite
            </span>
          </div>
        </div>
      </Link>
      <div className="">
        <Link
          to={`/product/${prod_info.prod_slug}`}
          className=" flex justify-between items-center"
        >
          <h3 className=" text-xl font-bold">{prod_info.prod_name}</h3>
          <div className="text-xl font-bold">
            {<ProdPrice price={prod_info.prod_price} />}
          </div>
        </Link>
        <p className="text-sm text-gray-900">{prod_info.prod_desc}</p>
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
        <Link to={`/Cart`}>
          <button
            data-prod-id={prod_info.id}
            onClick={addToCart}
            className="border border-black rounded-3xl block w-fit py-2 px-4 hover:bg-girlcode-pink hover:border-girlcode-pink hover:text-white font-bold"
          >
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
