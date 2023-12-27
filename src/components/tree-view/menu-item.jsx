import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  return <li>
    <p>{item.label}</p>
    {
        item && item.children && item.children.length ? 
        <MenuList list={item.children} />
        
        : null
    }
  </li>;
}
