const ContextMenu = ({ contextCon, sizes, menuRef, setContextBlock }) => {
  return (
    <div ref={menuRef} className="context-menu"style={{ top: `${sizes.y}px`, left: `${sizes.x}px` }}>
      {contextCon}
      <button
       value="Edit"
        onClick={(e) => {
          setContextBlock(false);
          console.log(e.target.value, contextCon);
        }}
      >
        Edit
      </button>
      <button
        
        value="Remove"
        onClick={(e) => {
          setContextBlock(false);
          console.log(e.target.value, contextCon);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default ContextMenu;
