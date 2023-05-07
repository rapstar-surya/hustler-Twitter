import "./SidebarOption.css";

// eslint-disable-next-line react/prop-types
function SidebarOption({ text, Icon }) {
  return (
    <div className={`sidebarOption`}>
      <Icon />
      <h2 className="text">{text}</h2>
    </div>
  );
}

export default SidebarOption;