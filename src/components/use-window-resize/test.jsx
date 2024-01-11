import useWindowResize from "."


export default function UseWindowResizeHook() {
    const windowSize = useWindowResize();
    const {width, height} = windowSize;
  return (
    <div>
       <h1>useWindowResize Hook</h1>
       <p>Width: {width}</p>
       <p>Height: {height}</p>
    </div>
  )
}
