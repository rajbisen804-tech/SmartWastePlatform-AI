"use client";

import {
Bot,
Sparkles,
} from "lucide-react";

export default function AIInsights(){

return(

<div className="glass rounded-3xl p-7 shadow-xl">

<div className="flex items-center gap-3">

<Bot
className="text-emerald-600"
size={34}
/>

<h2 className="text-2xl font-bold">
AI Insights
</h2>

</div>

<div className="mt-6 space-y-5">

<div className="rounded-2xl bg-emerald-50 p-5">

<p className="font-semibold">

♻️ Plastic waste increased
12%

</p>

</div>

<div className="rounded-2xl bg-blue-50 p-5">

<p>

🚛 Collection efficiency

94%

</p>

</div>

<div className="rounded-2xl bg-yellow-50 p-5">

<p>

✨ Recommendation

Deploy one more truck
near Zone A.

</p>

</div>

</div>

</div>

)

}