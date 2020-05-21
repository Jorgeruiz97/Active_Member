import Axios from 'axios';
import moment from 'moment';
import * as ms from "@microsoft/teams-js";
import * as jwt_decode from "jwt-decode";
import * as at from './actionTypes';

export const init = () => {
  return dispatch => {
    try {
      ms.initialize(() => {
        ms.getContext(async (context) => {
          const { userPrincipalName, userObjectId } = context;
          // userObjectId
          // userPrincipalName
          dispatch({ type: at.SET_CONTEXT, data: context })
          const { data: { exists, user } } = await Axios.get(`/api/members?id=${userPrincipalName}`);
          if (exists) {
            if (moment(user.membershipExpiration).isBefore(moment())) {
              // membership active
              dispatch({ type: at.ACTIVE_MEMBERSHIP, data: user });
            } else {
              // membership expired
              dispatch({ type: at.EXPIRED_MEMBERSHIP, data: user });
            }
          } else {
            // membership does not exist
            ms.authentication.getAuthToken({
              successCallback: (result) => dispatch({ type: at.NO_MEMBERSHIP , data: jwt_decode(result) }),
              failureCallback: (error) => dispatch({ type: at.APP_ERROR, msg: String(error) })
            });
          }

          ms.appInitialization.notifyAppLoaded();
        })
      })
    } catch (error) {
      dispatch({ type: at.APP_ERROR, msg: String(error) })
    }
  }
}

const activateUser = (form, card) => {
  return async (dispatch, getState) => {
    const { user, context } = getState();
    try {
      const payload = { user, context, form }
      const { data } = await Axios.post('/api/activate', payload);
      dispatch({ type: at.ACTIVATE_SUCCESS, data });

    } catch (error) {
      dispatch({ type: at.ACTIVATE_ERROR })
    }
  }
}
