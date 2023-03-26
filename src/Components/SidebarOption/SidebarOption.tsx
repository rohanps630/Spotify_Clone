import React from "react";
import "./SidebarOption.css";

interface Props {
  title: string;
  Icon?: any;
}

function SidebarOption({ title, Icon }: Props) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
