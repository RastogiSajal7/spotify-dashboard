import React from "react";
import { useDispatch } from "react-redux";
import { VscGraph } from "react-icons/vsc";
import BarChart from "./charts/BarChart";
import { setSelectedComponent } from "../redux/componentSlice";

const Nav = () => {
  const dispatch = useDispatch();

  const chartsItems = [
    { icon: <VscGraph />, label: "BarChart", component: <BarChart /> },
  ];

  const handleChartClick = (component) => {
    dispatch(setSelectedComponent(component));
  };

  return (
    <div className="relative h-screen border-l-2 border-r-2 bg-gray-900 text-white border-white">
      <div className="relative h-screen pt-5 pl-6 pr-5 ">
        <div className="grid grid-cols-2 gap-2 mt-10 ">
          {chartsItems.map((item, index) => (
            <div
              key={index}
              className="rounded-full bg-slate-200 h-20 p-6 text-center hover:bg-blue-300 cursor-pointer"
              onClick={() => handleChartClick(item.component)}
            >
              <h3 className="text-base gap-3 font-semibold">
                {item.icon} {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
