import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import { useRouteMatch, useParams } from "react-router-dom";
import { Provider,Flex, Input } from '@fluentui/react-northstar';

import textToTheme from '../helpers/textToTheme';

import ActivateForm from '../forms/activateForm';

import { init } from '../store/actions/userAction';

const Teams = () => {
  const { app, user, context } = useSelector(state => state)
  const dispatch = useDispatch();
  // const { url, path } = useRouteMatch()
  // const { id } = useParams()
  
  useEffect(() => {
    dispatch(init())
  }, [])

  const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

  return (
    <Provider theme={textToTheme(context.theme)}>
      <h4>Hello, {user.unique_name}</h4>

      <Flex gap="gap.medium" padding="padding.medium" >
        <Input clearable fluid inline placeholder="stripe secret-key" type="text" />
      </Flex>

      {Object.keys(context).map(key => <div key={key}> context[key] </div>)}
      <br />
      {Object.keys(user).map(key => <div key={key}> user[key] </div>)}

      {/* <Elements stripe={promise}>
        <ActivateForm user={user} />
      </Elements> */}
    </Provider>
  )
}

export default Teams;
