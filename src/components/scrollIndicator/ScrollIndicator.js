import "./ScrollIndicator.css";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const url = "https://dummyjson.com/products?limit=100";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [url]);

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMushScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMushScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
  }, []);

  console.log(scrollPercentage);

  return (
    <div className="wrapper" style={{ flexDirection: "column" }}>
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="container">
        <div className="scrollIndicator-container">
          <h1>Scroll Indicator</h1>
          {products.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
