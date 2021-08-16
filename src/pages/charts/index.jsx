import React from 'react';
import { ChatsStyles } from './styles'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend } from 'recharts';

function Chart() {
    const data = [
        {
          name: 'A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    
    return (
        <ChatsStyles>
            <div className="chartContainer">
                <LineChart width={1000} height={300} data={data}>
                        <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                            <YAxis />
                                <Tooltip />
                            <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 1 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </ChatsStyles>
    )
}

export default Chart;