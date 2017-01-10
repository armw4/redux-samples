import { PENDING, NOT_FOUND, GENERIC_ERROR } from '../constants/'

export const SET_REQUEST_STATUS = 'SET_REQUEST_STATUS'

export const setRequestStatus = status => ({
  type: SET_REQUEST_STATUS,
  status
})

export const SET_USER = 'SET_USER'

export const setUser = user => ({
  type: SET_USER,
  user
})

export const RECEIVE_REPOSITORIES = 'RECEIVE_REPOSITORIES'

export const receiveRepositories = repositories => ({
  type: RECEIVE_REPOSITORIES,
  repositories
})

// we'd typically import a small wrapper around fetch that encapsulated error handling, parsing, etc.
// but we'll inline it for this sample. there's also agraboso/redux-api-middleware, but it's not being maintained (issues still accumulating).
const checkStatus = response  => {
  const { status, statusText } = response

  if (status >= 200 && status < 300) {
    return response
  } else {
    let error = new Error(statusText)

    error.response = response

    throw error
  }
}

const parseJSON = response => response.json()

export const fetchBookings = () => {
  return async function(dispatch, getState) {
    dispatch(setRequestStatus(PENDING))

    const { user } = getState()

    try {
      const repositories = await fetch(`https://api.github.com/users/${user}/repos`)
        .then(checkStatus)
        .then(parseJSON)

      dispatch(receiveRepositories(repositories))
    } catch(e) {
      const { response: { status } } = e

      if (status === 404) {
        dispatch(setRequestStatus(NOT_FOUND))
      } else {
        dispatch(setRequestStatus(GENERIC_ERROR))
      }
    }
  }
}
