import { data } from "../data";
import { useRef } from "react";
import ContextMenu from "./ContextMenu";
import useContextMenu from "./useContextMenu";
import MenuItems from "./MenuItems";

const Menu = () => {
  const menuRef = useRef();
  const divRef = useRef();
  const { contextCon,sizes, contextBlock, setContextBlock } = useContextMenu(divRef,menuRef
  );
  return (
    <>
      <ul ref={divRef} className="main">
        {data.map((item) => ( <MenuItems key={item.id} {...item} />
        ))}
      </ul>
      {contextBlock && (
        <ContextMenu contextCon={contextCon} sizes={sizes} menuRef={menuRef} setContextBlock={setContextBlock}
        />
      )}
    </>
  );
};

export default Menu;
