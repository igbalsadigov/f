import React, { useContext } from "react";
import ProductCard from "../../Components/ProductCard";
import { MainContext } from "../../Context/context";

const Home = () => {

  const {products} = useContext(MainContext)
  

  return (
    <div>
      {products.map((item) => (<ProductCard item={item}/>))}
    </div>
  );
};

export default Home;
