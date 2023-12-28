import { useState } from "react";
import MenuList from "./menu-list";
import {FaPlus, FaMinus} from 'react-icons/fa'
import './styles.css';

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggle(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  return (
    <li>
      <div className="menu-items">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
