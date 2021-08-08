import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

import Info from "../UI/Info/Info";

import classes from './Chart.module.css';

const Chart = props => {
  const [region, setRegion] = useState();

  if (!props.insurances.length) {
    return null;
  }

  const radioChangeHandler = event => setRegion(event.target.value);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let data = months.map((month, index) => {
    return {
      monthName: month,
      policiessold: props.insurances.filter(insurance => {
        if (region) {
          return new Date(insurance.dateOfPurchase).getMonth() === index && insurance.customerRegion === region
        } else {
          return new Date(insurance.dateOfPurchase).getMonth() === index;
        }   
      }).length
    }
  });

  console.log(data);

  return (
    <div className={classes.chart}>
      <Info>Monthly Trends</Info>
      <BarChart width={1100} height={300} data={data}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="monthName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="policiessold" fill="#4BB67D" />
      </BarChart>
      <div className={classes.radiocontrols}>
        <label>Filter by Customer Region:</label>
        <input type="radio" name="region" value="North" checked={region === 'North'} onChange={radioChangeHandler}/>
        <label>North</label>
        <input type="radio" name="region" value="East" checked={region === 'East'} onChange={radioChangeHandler}/>
        <label>East</label>
        <input type="radio" name="region" value="West" checked={region === 'West'} onChange={radioChangeHandler}/>
        <label>West</label>
        <input type="radio" name="region" value="South" checked={region === 'South'} onChange={radioChangeHandler}/>
        <label>South</label>
      </div>
    </div>
  )
}

export default React.memo(Chart);
