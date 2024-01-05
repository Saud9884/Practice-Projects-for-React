

export default function Suggestions({ data, handleSelect }) {
 

  return <ul>{data.length ? data.map((items, index) => <li key={index} onClick={handleSelect}>{items}</li>) : null}</ul>;
}
