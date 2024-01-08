import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Barchart = () => {
  
  const additionalGDPData = [
    { country: 'United States', gdp_2010: 14992, gdp_2023: 21433200 },
    { country: 'China', gdp_2010: 6038, gdp_2023: 16647318 },
    { country: 'Japan', gdp_2010: 5372, gdp_2023: 5372336 },
    { country: 'Germany', gdp_2010: 3340, gdp_2023: 4128358 },
    { country: 'India', gdp_2010: 1823, gdp_2023: 2957349 },
    { country: 'United Kingdom', gdp_2010: 2444, gdp_2023: 2824421 },
    { country: 'France', gdp_2010: 2619, gdp_2023: 2714175 },
    { country: 'Brazil', gdp_2010: 2205, gdp_2023: 1839759 },
    { country: 'Italy', gdp_2010: 2082, gdp_2023: 1810259 },
    { country: 'Canada', gdp_2010: 1600, gdp_2023: 1706241 },
  ];
  

  return (
    <div>
      <p className="font-medium ml-28 text-3xl font-san text-cyan-800">
        Bar chart
      </p>
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={additionalGDPData}
          margin={{ top: 50, right: 200, bottom: 50, left: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="gdp_2023" name="GDP-In-2023" fill='#8884f8' />
        </BarChart>
      </ResponsiveContainer>
      <p className="font-normal text-center mb-28 mt-2 text-3xl font-san text-cyan-800">
        Countrys GDP 0f 2023
      </p>
    </div>
  );
};

export default Barchart;