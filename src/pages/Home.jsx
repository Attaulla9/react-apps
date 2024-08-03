import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "@components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { items } from "../redux/producrts/productSlice";

function Home() {
  const [products, setProduct] = useState([]);
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCall();
  }, []);

  const fetchCall = async () => {
    const response = await axios.get(`http://localhost:3000/post`);
    const productList = await response.data;
    dispatch(items(productList));
    setProduct(productList);
  };

  return (
    <>
      <div className="flex flex-wrap mt-5">
        {products.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
