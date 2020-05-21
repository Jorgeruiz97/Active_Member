import React, { useEffect, useState } from 'react';
import * as ms from "@microsoft/teams-js";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useRouteMatch, useParams } from "react-router-dom";
import { Provider, Flex, Input } from '@fluentui/react-northstar';

import * as jwt_decode from "jwt-decode";

import textToTheme from '../helpers/textToTheme';

import ActivateForm from '../forms/activateForm';


const Teams = () => {
  // const { url, path } = useRouteMatch()
  // const { id } = useParams()
  const [user, setUser] = useState({})
  const [context, setContext] = useState({ theme: 'default' })
  
  ms.initialize(() => {
    ms.registerOnThemeChangeHandler((theme) => setContext((prev) => { return { ...prev, theme } }))

    ms.getContext((context) => {
      setContext(context)
    })

    ms.authentication.getAuthToken({
      successCallback: (result) => setUser({ ...jwt_decode(result), error: null }),
      failureCallback: (reason) => setUser({ error: reason })
    })

    
    ms.appInitialization.notifyAppLoaded()
  })
  
  useEffect(() => {
    console.log('loaded')
  }, [])


  const promise = loadStripe("pk_test_OKMPlKl58yQUwKR9VJpi8mXb");

  return (
    <Provider theme={textToTheme(context.theme)}>
      <div>
        <h4>Hello, {user.unique_name}</h4>
      </div>
      <Elements stripe={promise}>
        <ActivateForm user={user} />
      </Elements>
    </Provider>
  )
}

export default Teams;
