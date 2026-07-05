"use client";

import{
CloudSun,
Thermometer,
Droplets,
Wind,
}from"lucide-react";

export default function WeatherCard(){

return(

<div className="glass rounded-3xl p-6 shadow-xl">

<div className="flex items-center gap-3">

<CloudSun
className="text-yellow-500"
/>

<h2 className="text-2xl font-bold">

Weather

</h2>

</div>

<div className="mt-6 space-y-4">

<p>🌤 Sunny</p>

<p>🌡 31°C</p>

<p>💧 Humidity 56%</p>

<p>🌬 Wind 11 km/h</p>

</div>

</div>

)

}