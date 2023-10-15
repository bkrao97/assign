import React, { useState, useCallback } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    amt: 1500,
  },
  {
    name: "Feb",
    amt: 1200,
  },
  {
    name: "Mar",
    amt: 2290,
  },
  {
    name: "Apr",
    amt: 1500,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "Jun",
    amt: 2500,
  },
  {
    name: "Jul",
    amt: 2000,
  },
  {
    name: "Aug",
    amt: 2800,
  },
  {
    name: "Sep",
    amt: 2150,
  },
  {
    name: "Oct",
    amt: 1700,
  },
  {
    name: "Nov",
    amt: 2200,
  },
  {
    name: "Dec",
    amt: 1900,
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = useCallback(
    (entry, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={150} height={80} data={data}>
          <XAxis dataKey="name"></XAxis>
          <Bar dataKey="amt" onClick={handleClick} radius={[10, 10, 10, 10]}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
