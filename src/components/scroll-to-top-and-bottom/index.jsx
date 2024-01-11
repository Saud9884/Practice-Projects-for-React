import { useRef } from "react";
import useFetch from "../use-fetch";


export default function ScrollToTopAndBottom() {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
      );

      const bottomRef = useRef(null);

      function handleScrollBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'});
      }

      if(error){
        return <h1>Some Error Occured</h1>
      }

      if(pending){
        return <h1>Loading data...</h1>
      }

      function handleScrollTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
      }

  return (
    <div>
        <h1>Scroll to Top and Bottom Feature</h1>
        <h3>This the the top section</h3>
        <button onClick={handleScrollBottom}>Scroll to Bottom</button>

        <ul style={{listStyle: 'none',}}>
            {
                data && data.products && data.products.length ? 
                data.products.map(items=> <li>
                    {items.title}
                </li>)
                : null
            }
        </ul>
   <button onClick={handleScrollTop}>Scroll to Top Section</button>
   <div ref={bottomRef}></div>
    <h3>This the Bottom Section</h3>
    </div>
  )
}
