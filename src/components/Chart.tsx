import React from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { chart } from '../ts/interfaces';
import Select from './UI/Select/Select';

const Chart = ({ data }: chart) => {
  return (
      <ResponsiveContainer width='90%' height='80%'>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='online' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
  );
};

export default Chart;
