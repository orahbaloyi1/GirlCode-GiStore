import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const Product = () => {
  let { prodSlug } = useParams();
  let [prodInfo, setProdInfo] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/products/${prodSlug}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setProdInfo(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [prodSlug]);

  return (
    <>
      <MainLayout>
        <section className="py-20">
          <div className="container mx-auto">
            Prod Desc : {prodInfo.prod_desc}
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Product;
