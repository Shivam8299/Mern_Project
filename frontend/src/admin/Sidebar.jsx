import React, { useState } from "react";
import { FiPlusSquare, FiList, FiShoppingBag } from "react-icons/fi";
import Add from "./Add";
import List from "./List";
import OrderAdmin from "./OrderAdmin";
function Sidebar() {
  const [activeTab, setActiveTab] = useState(" ");
  return (
    <div className="w-full min-h-screen flex gap-6 ">
      <div className=" w-[18%] flex flex-col gap-4 border-r-1">
        <p
          onClick={() => setActiveTab("add")}
          className={`flex cursor-pointer items-center gap-2 border py-2 px-6 border-r-0 border-t-0 ${activeTab === 'add'? 'bg-red-100':''}`}
        >
          <FiPlusSquare className="text-xl" />
          <span className="hidden md:inline">Add items</span>
        </p>
        <p
          onClick={() => setActiveTab("list")}
          className={`cursor-pointer flex items-center gap-2 border py-2 px-6 border-r-0 ${activeTab === 'list'? 'bg-red-100':''}`}
        >
          <FiList className="text-xl" />
          <span className="hidden md:inline">List Items</span>
        </p>
        <p
          onClick={() => setActiveTab('order')}
          className={`${activeTab === 'order'? 'bg-red-100' :''} cursor-pointer flex items-center gap-2 border py-2 px-6 border-r-0`}
        >
          <FiShoppingBag className="text-xl" />
          <span className="hidden md:inline">Orders</span>
        </p>
      </div>
      {activeTab === "add" && <Add />}
      {activeTab === "list" && <List />}
      {activeTab === "order" && <OrderAdmin />}
    </div>
  );
}

export default Sidebar;
