import React, { Fragment } from 'react';
import Login from '../components/login';

import { Route, Redirect } from "react-router-dom";

export const ProtectedComponent = ({ test, children, to }) =>
  test ? <Fragment>{children}</Fragment> : <Redirect to={to} />

export const ProtectedRoute = (props) =>
  props.protect.test ? <Route {...props} /> : <Redirect to={props.protect.to} />