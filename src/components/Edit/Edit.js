import { useParams } from "react-router";
import React, { useEffect } from "react";

import { SERVER_URL } from "../../config/config";
import { useState } from "react";

import UpdateForm from "../UpdateForm/UpdateForm";
import Info from "../UI/Info/Info";

const Edit = props => {
  const params = useParams();
  const [insurance, setInsurance] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchInsurance() {
      setInsurance();
      setError('');
      setIsLoading(true);
      try {
        const response = await fetch(`${SERVER_URL}/${params.id}`);
        if (!response.ok) {
          throw new Error('Something went wrong. Please try agian!');
        }
        const result = await response.json();
        if (!result) {
          throw new Error('No insurance found with the given id');
        }
        setInsurance(result);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
    fetchInsurance();
  }, [params.id]);

  return (
    <React.Fragment>
      {insurance && <UpdateForm insurance={insurance} />}
      {isLoading && <Info>Fetching...</Info>}
      {error && <Info>{error}</Info>}
    </React.Fragment>
  )
}

export default Edit;