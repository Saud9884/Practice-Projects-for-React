import { useEffect } from "react";
import { useState } from "react";
import './styles.css';

export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <p>Loading Products..</p>;
  }

  console.log("ScrollPerce", scrollPercentage);

  return (
    <div>
      <div className="top-container">
        <h1>Custon Scroll Indicator : {`${Math.floor(scrollPercentage)}%`}</h1>
        <div className="scroll-progress-tracking-container">
        
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          > </div>
        </div>
      </div>
      <div className="data-container">
        {products && products.length > 0
          ? products.map((items) => (
              <div key={items.id}>
                <p>{items.title}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
