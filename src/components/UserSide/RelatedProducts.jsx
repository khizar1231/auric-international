import React, { useEffect, useState } from "react";
import Title from "./Title";
import ProductItems from "./ProductItems";
import api from "../../api/axios";
import allProducts from "../../components/UserSide/Forever_Ecommerce.products.json";
const RelatedProducts = ({ productId, category, subcategory }) => {
  const [related, setRelated] = useState([]);

  // const fetchRelatedProducts = async () => {
  //   try {
  //     const { data } = await api.get(
  //       `/product/relatesProductList?productId=${productId}&category=${category}&subCategory=${subcategory}`
  //     );

  //     if (data.success) {
  //       setRelated(data.products);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
const fetchRelatedProducts = () => {
  try {
    const relatedProducts = allProducts
      .filter(
        (item) =>
          item._id !== productId &&
          item.category === category &&
          item.subCategory === subcategory
      )
      .sort((a, b) => b.date - a.date)
      .slice(0, 5); // Show only 5 related products

    setRelated(relatedProducts);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    if (productId && category && subcategory) {
      fetchRelatedProducts();
    }
  }, [productId, category, subcategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItems
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;