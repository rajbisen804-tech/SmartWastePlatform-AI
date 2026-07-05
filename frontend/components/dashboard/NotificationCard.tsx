"use client";

import {
Bell,
CheckCircle2,
Truck,
Bot,
} from "lucide-react";

const notifications=[
{
title:"Driver Assigned",
time:"2 min ago",
icon:<Truck className="text-blue-600"/>,
},

{
title:"Waste Collected",
time:"10 min ago",
icon:<CheckCircle2 className="text-green-600"/>,
},

{
title:"AI Detected Plastic Waste",
time:"30 min ago",
icon:<Bot className="text-violet-600"/>,
},
];

export default function NotificationCard(){

return(

<div className="glass rounded-3xl p-6 shadow-xl">

<div className="mb-5 flex items-center gap-3">

<Bell/>

<h2 className="text-2xl font-bold">

Notifications

</h2>

</div>

<div className="space-y-4">

{notifications.map((n,i)=>(

<div
key={i}
className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow hover:bg-slate-50"
>

{n.icon}

<div>

<h3 className="font-semibold">
{n.title}
</h3>

<p className="text-sm text-slate-500">
{n.time}
</p>

</div>

</div>

))}

</div>

</div>

)

}