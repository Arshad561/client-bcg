import React, { useEffect, useState } from "react";

import { SERVER_URL } from "../../config/config";
import Chart from "../Chart/Chart";

import Info from "../UI/Info/Info";

const Stats = props => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
    async function fetchInsurances() {
      try {
        setIsFetching(true);
        const response = await fetch(`${SERVER_URL}`);
        if (!response.ok) {
          throw new Error('Something went wrong. Please try agian!');
        }
        const result = await response.json();
        if (!result.length) {
          throw new Error('No insurance found with the given id');
        }
        setInsurances(result);
      } catch (err) {
        setError(err.message);
      }
      setIsFetching(false);
    }
    fetchInsurances();
  }, []);

  return (
    <React.Fragment>
      <Chart insurances={insurances}/>
      {isFetching && <Info>Fetching Insurances...</Info>}
      {error && <Info>{error}</Info>}
    </React.Fragment>
  )
}

export default Stats;