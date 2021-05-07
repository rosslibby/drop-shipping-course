import {
  firebaseApp,
  comments,
  progress,
  steps,
  users
} from "../firebaseConfig";
import {
  CHECK_PAYMENT,
  GET_MODULES,
  GET_STEPS,
  GET_USER,
  GET_PROGRESS
} from "../constants";

/**
 * Get current user
 */
export const checkPayment = user => async dispatch => {
  users
    .child(user)
    .once("value")
    .then(userStatus => {
      return dispatch({
        type: CHECK_PAYMENT,
        payload: {
          course: userStatus.val().course,
          mentorship: userStatus.val().mentorship,
          discord: userStatus.val().discord
        }
      });
    });
};

/**
 * Fetch steps and fetch user completed steps
 */
export const getSteps = user => async dispatch => {
  steps.once("value").then(data => {
    progress
      .child(user)
      .once("value")
      .then(completed => {
        return dispatch({
          type: GET_STEPS,
          payload: {
            lessons: data.val(),
            progress: completed.val()
          }
        });
      });
  });
};

/**
 * Get progress
 */
export const getProgress = user => async dispatch => {
  progress
    .child(user)
    .once("value")
    .then(completed => {
      if (completed.val() !== undefined && completed.val() !== null)
        return dispatch({
          type: GET_PROGRESS,
          payload: {
            progress: Object.keys(completed.val()).filter(
              item => completed.val()[item].completed === true
            ).length
          }
        });
      return dispatch({
        type: GET_PROGRESS,
        payload: {
          progress: 0
        }
      });
    });
};

export const getUser = () => async dispatch => {
  firebaseApp.auth().onAuthStateChanged(user => {
    return dispatch({
      type: GET_USER,
      payload: user
    });
  });
};

export const completeStep = (user, step, completed) => async dispatch => {
  // add the step under the user ID to denote completion
  progress
    .child(user)
    .child(step)
    .set({ completed });

  progress
    .child(user)
    .once("value")
    .then(completed =>
      dispatch({
        type: GET_PROGRESS,
        payload: {
          progress: Object.keys(completed.val()).filter(
            item => completed.val()[item].completed === true
          ).length
        }
      })
    );
};

export const undoStep = (step, user) => async dispatch => {
  progress.child(`${user}++${step}`).remove();
};

export const getModules = modules => {
  return {
    type: GET_MODULES,
    modules
  };
};
