import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const selectedComponent = useSelector((state) => state.component.selectedComponent);
  return (
    <div className="p-4">
      {selectedComponent ? selectedComponent : <div>Select a chart to display</div>}
    </div>
  );
};

export default Content;