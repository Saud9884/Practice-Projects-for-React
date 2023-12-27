import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

export default function LoadMore() {
  const [count, setCount] = useState(0);
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading Data...</div>;
  }

  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {product && product.length
            ? product.map((items) => (
                <div key={items.id} className="products">
                  <img src={items.thumbnail} alt={items.title} />
                  <span>{items.title}</span>
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
          <button disabled={count === 4} onClick={() => setCount(count + 1)}>Load More Data</button>
        </div>
        <span>
            {count === 4 ? "Reached 100 limit" : null}
        </span>
      </div>
    </>
  );
}
