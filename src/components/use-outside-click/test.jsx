import { useRef, useState } from "react"
import useOutsideClick from ".";


export default function UseOutsideClickHookTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
       
        {
        showContent ?<div ref={ref}>
           <h1>This is a Random Content</h1>
           <p>Please click outside this to close this content.</p>
        </div> :  <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
  )
}
