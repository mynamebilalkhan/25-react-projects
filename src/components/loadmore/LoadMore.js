import { useEffect, useState } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const data = await res.json();

        if (data && typeof data.products === "object") {
          const productsArray = Object.values(data.products);
          setProducts((prevProducts) =>
            count > 0 ? [...prevProducts, ...productsArray] : productsArray
          );
        } else {
          console.error("Unexpected data format: ", data);
        }

        setLoading(false);
      } catch (err) {
        console.log("Error while fetching the products: ", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Loading....</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="product-container">
          {products?.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))}
          <div className="loadmore-button">
            <button
              disabled={disableButton}
              onClick={() => setCount(count + 1)}
            >
              Load More Products
            </button>
            {disableButton && <p>No More Products</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadMore;
