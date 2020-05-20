import React, { useEffect, useState } from 'react';
import * as ms from "@microsoft/teams-js";

import { Redirect, useRouteMatch, useParams } from "react-router-dom";
import { Provider, Form } from '@fluentui/react-northstar';

import * as jwt_decode from "jwt-decode";

import textToTheme from '../helpers/textToTheme';


const Teams = () => {
  const { url, path } = useRouteMatch()
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [context, setContext] = useState({ theme: 'default' })
  
  ms.initialize(() => {
    ms.registerOnThemeChangeHandler((theme) => setContext((prev) => { return { ...prev, theme } }))
    ms.getContext((context) => {
      setContext(context)
    })
    ms.authentication.getAuthToken({
      successCallback: (result) => { setUser({ ...jwt_decode(result), error: null }) },
      failureCallback: (reason) => { setUser({ error: reason }) }
    })
    ms.appInitialization.notifyAppLoaded()
  })
  // make post requests to check if user already in a subscription


  const submit = () => {
    alert('Form submitted');
  }

  return (
    <Provider theme={textToTheme(context.theme)}>
      <h1>hi</h1>
      <div>{user.unique_name}</div>
      {/* {
        context.appSessionId && user.unique_name ?
        :
        <Redirect to="/" />
      } */}
      {/* user school ID */}
      {/* card and billing detail details */}
    </Provider>
  )
}

export default Teams;
