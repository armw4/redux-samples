// NOTE: we've used symlinks to node_modules in the past to get around the '../../../path-to-system-under-test' stuff but doesn't bother me much
import React from 'react'
import { Provider } from 'react-redux'
import nock from 'nock'
import { mount } from 'enzyme'
import App from '../../../../apps/github-api-sample/containers/App'
import configureStore from '../../../../apps/github-api-sample/store'
import goEuro from '../../../data/github-goeuro-user-snapshot.json'

describe('<App />', () => {
  afterEach(() => nock.cleanAll())

  let wrapper
  let findButton
  let userTextInput

  beforeEach(() => {
    const store = configureStore()
    wrapper = mount(<Provider store={store}><App /></Provider>)

    userTextInput = wrapper.find('form input[type="text"]')
    findButton = wrapper.find('form input[type="submit"]')
  })

  describe('when the user does not exist', () => {
    before(() => {
      nock('https://api.github.com')
        .get('/users/goeuro-2012/repos?sort=created')
        .reply(404)
    })

    it('should display a message saying "User not found."', () => {

    })
  })

  describe('when an unexpected error occurs', () => {
    before(() => {
      nock('https://api.github.com')
        .get('/users/goeuro-2012/repos?sort=created')
        .reply(500)
    })

    it('should display a message saying "An unexpected error occurred."', () => {

    })
  })

  describe('when the user exists', () => {
    before(() => {
      nock('https://api.github.com')
        .get('/users/goeuro-2012/repos?sort=created')
        .reply(200, goEuro)
    })

    it('should display a list of the user\'s repositories with a link to each repo', () => {
      const repositoryList = wrapper.find('.repositories')
    })
  })
})
