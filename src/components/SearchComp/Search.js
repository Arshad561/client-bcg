import { useState } from 'react';

import classes from './Search.module.css';

const Search = (props) => {
  const [id, setId] = useState('');
  const [searchBy, setSearchBy] = useState('policyId');

  const inputChangeHandler = event => {
    setId(event.target.value);
  }

  const radioChangeHandler = event => {
    setSearchBy(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();
    if (!id) {
      alert('Please enter id');
    }
    let filter = {
      where: {
        [searchBy]: id
      }
    }
    props.searchHandler(filter);
    // clear the fields
    setId('');
    setSearchBy('policyId');
  }

  return (
    <section className={classes.search}>
      <h1>Find Insurance</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Id:</label>
          <input type="text" placeholder="PolicyId or CustomerId" value={id} required onChange={inputChangeHandler} />
        </div>
        <div className={classes.control}>
          <label>Search By:</label>
          <input type="radio" name="searchby" value="policyId" checked={searchBy === 'policyId'} onChange={radioChangeHandler} />
          <label>PolicyId</label>
          <input type="radio" name="searchby" value="customerId" checked={searchBy === 'customerId'} onChange={radioChangeHandler} />
          <label>CustomerId</label>
        </div>
        <div className={classes.actions}>
          <button>Find Insurance</button>
        </div>
      </form>
    </section>
  )
}

export default Search;