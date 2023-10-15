import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 650 },
  { name: "Group B", value: 250 },
  { name: "Group C", value: 100 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CircleChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={190}
        cy={195}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </ResponsiveContainer>
  );
}
