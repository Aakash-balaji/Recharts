import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PopulationAreaChart = () => {

  const populationGrowthData = [
    { country: 'United States', population_2000: 281421906, population_2023: 344145586 },
    { country: 'China', population_2000: 1262645000, population_2023: 1460148150 },
    { country: 'India', population_2000: 1056575549, population_2023: 1407150492 },
    { country: 'Brazil', population_2000: 174425387, population_2023: 215732025 },
    { country: 'Russia', population_2000: 146001176, population_2023: 145912025 },
    { country: 'Nigeria', population_2000: 119901274, population_2023: 219799876 },
    { country: 'Japan', population_2000: 126843000, population_2023: 125854745 },
    { country: 'Germany', population_2000: 82488495, population_2023: 83132799 },
    { country: 'France', population_2000: 60896478, population_2023: 65751198 },
    { country: 'Mexico', population_2000: 98865447, population_2023: 131562214 },
  ];
  

  return (
    <div>
      <p className='font-medium ml-28 text-3xl font-san text-cyan-800'>Area chart</p>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={populationGrowthData} margin={{top:50,right:200,bottom:50,left:50}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="population_2000" stroke='#413ea0' />
          <Area dataKey="population_2023" stroke='#ff7300' />
        </AreaChart>
      </ResponsiveContainer>
      <p className="font-normal text-center mb-44 mt-1 text-3xl font-san text-cyan-800">
        Population Grouth from 2000 to 2023
      </p>
    </div>
  );
  
};

export default PopulationAreaChart;
