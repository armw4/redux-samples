import { PENDING, NOT_FOUND, GENERIC_ERROR } from '../constants'
import camelize from 'camelize'
import makeError from 'make-error'

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

// so we can handle web errors (this guy would typically live in some errors file separate from our actions)
const HttpError = makeError('HttpError')

// we'd typically import a small wrapper around fetch that encapsulated error handling, parsing, etc.
// but we'll inline it for this sample. there's also agraboso/redux-api-middleware, but it's not being maintained (issues still accumulating).
const checkStatus = response  => {
  const { status, statusText } = response

  if (status >= 200 && status < 300) {
    return response
  } else {
    let error = new HttpError(statusText)

    error.response = response

    throw error
  }
}

const parseJSON = response => response.json()

export const fetchRepositories = () => {
  return async function(dispatch, getState) {
    dispatch(setRequestStatus(PENDING))

    const { user } = getState()

    try {
      const repositories = await fetch(`https://api.github.com/users/${user}/repos`)
        .then(checkStatus)
        .then(parseJSON)

      const thisAintRubyOnRails = repositories.map(camelize)

      dispatch(receiveRepositories(thisAintRubyOnRails))
    } catch(e) {
      const { message } = e
      // we need to ensure it's a web error as opposed to a react/component error (i.e. within the call to receiveRepositories)
      // with Bluebird promised we'd call .catch(MyTypedError) and handle accordingly, but we're not dealing in Bluebird here.
      if (e instanceof HttpError) {
        const { response: { status } } = e

        if (status === 404) {
          dispatch(setRequestStatus(NOT_FOUND))
        } else {
          dispatch(setRequestStatus(GENERIC_ERROR))
        }
      } else if (e instanceof TypeError && (message === 'Failed to fetch' || message === 'Network request failed')) {
        // re: "Github API does not respond"
        //
        // both the native fetch and pollyfill throw TypeError for less trivial network issues.
        // the fetch pollyfill will yield something like https://github.com/github/fetch/blob/4dbbfd0/fetch.js#L433,
        // while Chrome tends to yield "Failed to fetch". i haven't tried other browsers. this heuristic (at least in Chrome), while i don't
        // love it, also handles more than just timeout errors. it can handle stuff like name resolution failures as well.
        // it can even handle when the scheme is wrong (i.e. Fetch API cannot load htps://api.github.com/users/fdsfsdfds/repos. URL scheme must be "http" or "https" for CORS request)
        // it sucks that the resulting promise doesn't naturally handle this stuff, but it's a good learning experience nonetheless (i wonder how jQuery handles all this stuff).
        // people *want* fetch to provide a timeout option (https://github.com/whatwg/fetch/issues/20), but I don't think it's made it
        // into the spec at the time of this writing (shrugs).
        dispatch(setRequestStatus(GENERIC_ERROR))
      } else {
        // this isn't related to any web traffic so don't swallow it (let if fly!!!)
        throw e
      }
    }
  }
}
