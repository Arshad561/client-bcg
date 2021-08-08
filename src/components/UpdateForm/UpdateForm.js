import Form from '@rjsf/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { SERVER_URL } from '../../config/config';

import FormSchema from '../../config/form-schema.json';
import Info from '../UI/Info/Info';

import classes from './UpdateForm.module.css'

const UpdateForm = props => {
  const history = useHistory();
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(false);
  const [updatedInsurance, setUpdatedInsurance] = useState();
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);

  const updateHandler = async (event) => {
    setIsUpdateClicked(true);
    let data = { ...event.formData }
    if (data.premium < 1 || data.premium > 1000000) {
      return;
    }
    delete data.date;
    setIsUpdating(true);
    setError(false);
    setUpdatedInsurance();
    try {
      const response = await fetch(`${SERVER_URL}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Something went wrong. Please try agian!');
      }
      const result = await response.json();
      if (!result) {
        throw new Error('No insurance found with the given id');
      }
      setUpdatedInsurance(result);
    } catch (err) {
      setError(err.message);
    }
    setIsUpdating(false);
  }

  const cancelHandler = (event) => {
    history.push('/');
  }

  let date = new Date(props.insurance.dateOfPurchase);
  let formatedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
  let formData = {
    ...props.insurance,
    date: formatedDate
  };

  return (
    <React.Fragment>
      {!isUpdateClicked && <Form className={classes.form} schema={FormSchema} formData={formData} onSubmit={updateHandler}>
        <div className={classes.buttons}>
          <button type="reset" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Update</button>
        </div>
      </Form>}
      {error && <Info>{error}</Info>}
      {isUpdating && <Info>Updating...</Info>}
      {updatedInsurance && <Info>Insurance with policyId {updatedInsurance.policyId} updated successfully</Info>}
    </React.Fragment>
  );
}

export default UpdateForm;