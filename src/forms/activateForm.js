import React, { useState } from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Flex, Input } from '@fluentui/react-northstar';

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { cardStyle } from '../styles';

const ActivateForm = ({ user }) => {
  const { app: { error, processing, available }} = useSelector(state => state);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [id, setId] = useState('')

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    // setDisabled(event.empty);
    // setError(event.error ? event.error.message : "");
  };

  const submit = async ev => {
    ev.preventDefault();

    // setProcessing(true);

    const { data: { clientSecret } } = await Axios.post('/api/activate')
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: user.upn,
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user.name,
          phone: id
        }
      }
    });

    // if (payload.error) {
    //   setError(`Payment failed ${payload.error.message}`);
    //   setProcessing(false);
    // } else {
    //   setError(null);
    //   setProcessing(false);
    // }
  };

  return (
    <div>
      <Flex gap="gap.medium" padding="padding.medium" size="size.full">
        <Input clearable fluid inline placeholder="UTEP ID" onChange={(e) => setId(e.target.value)} />
      </Flex>

      <CardElement id="card-element" options={cardStyle} onChange={handleChange}/>

      <Flex gap="gap.medium" padding="padding.medium" >
        <Input clearable fluid inline placeholder="stripe secret-key" defaultValue="" type="password" />
      </Flex>

      <Button disabled={available} id="submit" onClick={submit}>Activate my membership!</Button>
    </div>
  )
}

export default ActivateForm;
