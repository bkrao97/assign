import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";
import dashboard from "../images/dashboard.png";
import customers from "../images/customers.png";
import help from "../images/help.png";
import product from "../images/product.png";
import promote from "../images/promote.png";
import income from "../images/income.png";
import profile from "../images/profile.png";
import hexagon from "../images/hexagon.png";

function SideNav() {
  return (
    <div className="bg-blue-900 text-white p-4   md:w-1/5 md:h-screen md:flex md:flex-col md:justify-between  ">
      <div className=" md: mt-2 md:grid-cols-none md:justify-start md:items-center ">
        <ul>
          <li className="p-2 text-xl font-medium rounded-md ">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={hexagon} className="w-8 h-8 md:w-6 md:h-6 mr-2" />
                <li>Dashboard</li>
              </div>
            </div>
          </li>
        </ul>
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-none md:items-start mt-16 p-4">
          <li className="p-2 text-l font-medium rounded-md hover:bg-sky-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={dashboard} className="w-8 h-8 md:w-5 md:h-6 mr-2" />
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <img src={arrow} className="w-6 h-6" />
            </div>
          </li>
          <li className="p-2 text-l font-medium rounded-md hover:bg-sky-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={product} className="w-8 h-8 md:w-5 md:h-6 mr-2" />
                <Link to="/products">Products</Link>
              </div>
              <img src={arrow} className="w-6 h-6" />
            </div>
          </li>
          <li className="p-2 text-l font-medium rounded-md hover:bg-sky-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={customers} className="w-8 h-8 md:w-5 md:h-6 mr-2" />
                <Link to="/customers">Customers</Link>
              </div>
              <img src={arrow} className="w-6 h-6" />
            </div>
          </li>
          <li className="p-2 text-l font-medium rounded-md hover:bg-sky-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={income} className="w-8 h-8 md:w-5 md:h-6 mr-2" />
                <Link to="/income">Income</Link>
              </div>
              <img src={arrow} className="w-6 h-6" />
            </div>
          </li>
          <li className="p-2 text-l font-medium rounded-md hover:bg-sky-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={promote} className="w-8 h-8 md:w-5 md:h-5 mr-2" />
                <Link to="/promote">Promote</Link>
              </div>
              <img src={arrow} className="w-6 h-6" />
            </div>
          </li>
          <li className="p-2 text-l font-medium rounded-md hover:bg-sky-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <img src={help} className="w-8 h-8 md:w-5 md:h-5 mr-2" />
                <Link to="/help">Help</Link>
              </div>
              <img src={arrow} className="w-6 h-6" />
            </div>
          </li>
        </ul>
      </div>
      <ul>
        <li className="p-2 text-2xl font-medium rounded-md hover:bg-sky-700">
          <div className="flex items-center justify-between">
            <div className="flex  items-center justify-start">
              <img src={profile} className="w-8 h-8 md:w-10 md:h-10 mr-2" />
              <div className="flex flex-col justify-start">
                <Link to="/dashboard">Evano</Link>
                <li className="text-sm">Project Manager</li>
              </div>
            </div>
            <img src={arrow} className="w-6 h-6" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
