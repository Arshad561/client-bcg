import Insurance from '../Insurance/Insurance';

import classes from './InsuranceList.module.css';

const InsuranceList = props => {
  if (props.insurances.length === 0) {
    return null;
  }
  return (
    <ul className={classes['insurance-list']}>
      {props.insurances.map(insurance => <Insurance key={insurance.policyId} insurance={insurance}/>)}
    </ul>
  );
}

export default InsuranceList;
