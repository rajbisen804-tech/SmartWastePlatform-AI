"use client";

import {
PieChart,
Pie,
Cell,
ResponsiveContainer,
Tooltip,
Legend,
} from "recharts";

const data=[
{
name:"Plastic",
value:45,
},
{
name:"Organic",
value:25,
},
{
name:"Metal",
value:18,
},
{
name:"Glass",
value:12,
},
];

const COLORS=[
"#10B981",
"#3B82F6",
"#F59E0B",
"#8B5CF6",
];

export default function WastePieChart(){

return(

<div className="glass rounded-3xl p-6 shadow-xl">

<h2 className="mb-5 text-2xl font-bold">

Waste Categories

</h2>

<div className="h-80">

<ResponsiveContainer>

<PieChart>

<Pie

data={data}

dataKey="value"

outerRadius={110}

label

>

{data.map((entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

)

}