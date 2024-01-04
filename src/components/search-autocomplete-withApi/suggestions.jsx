export default function Suggestions({ data }) {
  return <ul>{data.length ? data.map((items) => <li>{items}</li>) : null}</ul>;
}
