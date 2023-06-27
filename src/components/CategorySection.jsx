import { useEffect, useState } from "react";
import furnImg from "../assets/furniture.jpg";
import bagImg from "../assets/Hand-bag.png";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    // console.log("Pull Cat List");
    fetch("http://127.0.0.1:5000/categories") //fetch data from backend to frontend
      .then((resp) => resp.json()) // handle the promise respond & convert to json
      .then((resp) => {
        // console.log(resp.categories);
        setCatList(resp.categories);
      })
      .catch((error) => {
        console.log(error); //catches error
      });
  }, []);

  /*{
  const CatList = [
    {
      name: "Funiture",
      path: "/category/furniture",
    },
    {
      name: "Hand Bag",
      path: "/category/hand-bag",
    },
    {
      name: "Books",
      path: "/category/books",
    },
    {
      name: "Tech",
      path: "/category/tech",
    },
    {
      name: "Sneakers",
      path: "/category/sneaker",
    },
    {
      name: "Travel",
      path: "/category/travel",
    },
  ];*/

  return (
    <section className="pt-20">
      <div className="container mx-auto">
        <div className="mb-9">
          <h2 className="text-2xl font-extrabold">Shop Our Top Categories</h2>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {catList.map((cat) => (
            <Link
              to={cat.path}
              className="rounded-xl overflow-hidden relative"
              key={cat.name}
            >
              <img src={furnImg} alt={"${cat.name} Category"} />
              <h3 className="absolute top-3 left-1/2 text-xl font-extrabold text-girlcode-pink -translate-x-1/2">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategorySection;
