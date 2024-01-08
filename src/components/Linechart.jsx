
// import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EngagementChart = () => {

  const engagementData = [
    { date: '2022-01-01', pageViews: 100, bounceRate: 20, uniqueVisitors: 80, returningVisitors: 60, newVisitors: 20 },
    { date: '2022-01-02', pageViews: 150, bounceRate: 15, uniqueVisitors: 90, returningVisitors: 70, newVisitors: 20 },
    { date: '2022-01-03', pageViews: 120, bounceRate: 18, uniqueVisitors: 85, returningVisitors: 65, newVisitors: 20 },
    { date: '2022-01-04', pageViews: 130, bounceRate: 17, uniqueVisitors: 88, returningVisitors: 68, newVisitors: 20 },
    { date: '2022-01-05', pageViews: 110, bounceRate: 22, uniqueVisitors: 82, returningVisitors: 62, newVisitors: 20 },
    { date: '2022-01-06', pageViews: 160, bounceRate: 14, uniqueVisitors: 95, returningVisitors: 75, newVisitors: 20 },
    { date: '2022-01-07', pageViews: 140, bounceRate: 16, uniqueVisitors: 87, returningVisitors: 67, newVisitors: 20 },
    { date: '2022-01-08', pageViews: 125, bounceRate: 19, uniqueVisitors: 83, returningVisitors: 63, newVisitors: 20 },
    { date: '2022-01-09', pageViews: 105, bounceRate: 21, uniqueVisitors: 81, returningVisitors: 61, newVisitors: 20 },
    { date: '2022-01-10', pageViews: 115, bounceRate: 23, uniqueVisitors: 78, returningVisitors: 58, newVisitors: 20 },
  ];
  

  return (
   <div>
        <h1 className='font-bold text-center text-4xl font-san'>Charts using Rechart Library</h1>
        <p className='font-medium ml-28 text-3xl font-san text-cyan-800'>Line chart</p>

        <ResponsiveContainer width="100%" height={600} >
            <LineChart data={engagementData} margin={{top:50,right:200,botton:50,left:50}}>
                <CartesianGrid strokeDasharray="3"/>
                <XAxis dataKey="date"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line dataKey="pageViews" name='Page Views' stroke='#413ea0'/>
                <Line dataKey="bounceRate" name='Bounce Rate' stroke='#ff7300'/>
                <Line dataKey="uniqueVisiters" name='Unique Visiters' stroke='#ffc658'/>
                <Line dataKey="returningVisitors" name='Returning Visitors' stroke='#82ca9d'/>
                <Line dataKey="newVisitors" name='New Visitors' stroke='#8884f8'/>
            </LineChart>

        </ResponsiveContainer>
        <p className='font-normal text-center mb-28 mt-3 text-3xl font-san text-cyan-800'>Website user engagement</p>
   </div>
  );
};

export default EngagementChart;



