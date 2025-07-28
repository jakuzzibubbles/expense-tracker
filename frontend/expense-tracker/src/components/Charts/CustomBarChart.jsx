import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import CustomTooltip from "../../components/Charts/CustomTooltip";


const CustomBarChart = ({data}) => {

  // Function to alternate colors
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbefb";
  };

  return (
    <div className='bg-white mt-6'>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke='none' />

          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} stroke='none' />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke='none' />

          <Tooltip content={CustomTooltip} />

          <Bar dataKey="amount" fill="#FF8042" radius={[10, 10, 0, 0]} activeDot={{ r: 8, fill: "yellow" }} activeStyle={{ fill: "green" }} >

            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;