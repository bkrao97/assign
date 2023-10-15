import React, { useState } from "react";
import SideNav from "./sideNav";
import Search from "./search";
import Tag from "./tag";
import BarChart from "./barChart";
import CircleChart from "./circleChart";
import ProductTable from "./productTable";

function Home() {
  const TagsData = [
    {
      image: require("../images/earnings.png"),
      tag: "Earning",
      amount: "$198k",
      change: require("../images/red-arrow.png"),
      changePercent: "37.5",
    },
    {
      image: require("../images/orders.png"),
      tag: "Orders",
      amount: "$2.4k",
      change: require("../images/green-arrow.png"),
      changePercent: "2",
    },
    {
      image: require("../images/balance.png"),
      tag: "Balance",
      amount: "$2.4k",
      change: require("../images/red-arrow.png"),
      changePercent: "2",
    },
    {
      image: require("../images/sales.png"),
      tag: "Total Sales",
      amount: "$89k",
      change: require("../images/green-arrow.png"),
      changePercent: "11",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: require("../images/orders.png"),
      stocks: 50,
      price: 19.99,
      totalSales: 999.5,
    },
    {
      id: 2,
      name: "Product 2",
      image: require("../images/balance.png"),
      stocks: 25,
      price: 309.99,
      totalSales: 50.5,
    },
  ];

  return (
    <div className="md:flex md:w-full bg-gray-100  ">
      <SideNav />
      <div className="w-full p-4">
        <div className="flex flex-col  ">
          <div className=" flex  md:justify-between m-2 md:w-full ">
            <h1 className="text-xl  font-medium">Hello Shahrukh,</h1>
            <Search />
          </div>
          <div className="flex flex-col md:flex-row md:flex-1 w-full justify-stretch">
            {TagsData.map((data) => (
              <Tag
                image={data.image}
                tag={data.tag}
                amount={data.amount}
                change={data.change}
                changePercent={data.changePercent}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between md:flex-row md:w-full md:justify-evenly h-2/5 ">
            <div className="relative ml-8 bg-white md:w-4/6 p-10 rounded-lg ">
              <div className="absolute top-4 left-8 flex flex-col justify-start items-start">
                <p className="  font-bold">Overview</p>
                <p className="text-xs">Monthly earnings</p>
              </div>
              <BarChart />
            </div>
            <div className="relative md:w-2/6 bg-white  rounded-lg ml-10 ">
              <div className="absolute top-4 left-8 flex flex-col  items-start">
                <p className="  font-bold">Customers</p>
                <p className="text-xs">Customers that buy products</p>
              </div>
              <div className="absolute top-44 left-40 flex flex-col  items-center">
                <p className=" text-xl font-bold">65%</p>
                <p className="text-xs">New Customers</p>
              </div>
              <CircleChart />
            </div>
          </div>
          <div className="m-8  bg-white p-4 mr-2 rounded-lg">
            <div className="flex flex-col md:flex-row md:justify-between mb-6">
              <p className="  font-bold">Product Sell</p>
              <div className="mr-24">
                <Search />
              </div>
            </div>
            <ProductTable products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
