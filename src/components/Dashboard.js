import React from "react";
import Nav from "./Nav";
import Content from "./Content";

function Dashboard() {

  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <Nav />
        </div>
        <div className="col-span-12 md:col-span-8 order-last">
          <div>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
