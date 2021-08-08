import { Link } from 'react-router-dom';
import classes from './Insurance.module.css';

const Insurance = (props) => {
  return (
    <li className={classes.insurance}>
      <div className={classes.prop}>
        <div>PolicyId</div>
        <div>{props.insurance.policyId}</div>
      </div>
      <div className={classes.prop}>
        <div>CustomerId</div>
        <div>{props.insurance.customerId}</div>
      </div>
      <div className={classes.prop}>
        <div>Premium</div>
        <div>{props.insurance.premium}</div>
      </div>
      <div className={classes.prop}>
        <div>Region</div>
        <div>{props.insurance.customerRegion}</div>
      </div>
      <Link to={'/edit/' + props.insurance.policyId}>
        <button>Edit</button>
      </Link>
    </li>
  )
};

export default Insurance;