import React from 'react';
import { useState } from 'react';

import { SERVER_URL } from '../../config/config';
import Search from '../SearchComp/Search';
import InsuranceList from '../InsuranceList/InsuranceList';
import Info from '../UI/Info/Info';

const Home = props => {
  const [insurances, setInsurances] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const findInsurance = async (filter) => {
    setInsurances([]);
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch(`${SERVER_URL}?filter=${JSON.stringify(filter)}`);
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
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <Search searchHandler={findInsurance} />
      <InsuranceList insurances={insurances} />
      {isLoading && <Info>Fetching...</Info>}
      {error && <Info>{error}</Info>}
    </React.Fragment>
  );

}

export default Home;