// NOTE: we've used symlinks to node_modules in the past to get around the '../../../path-to-system-under-test' stuff but doesn't bother me much
import React from 'react'
import { Provider } from 'react-redux'
import nock from 'nock'
import { mount } from 'enzyme'
import App from '../../../../apps/github-api-sample/containers/App'
import configureStore from '../../../../apps/github-api-sample/store'
import goEuro from '../../../data/github-goeuro-user-snapshot.json'
import assert from 'assert'

describe('<App />', () => {
  afterEach(() => nock.cleanAll())

  let wrapper
  let findForm
  let userTextInput

  beforeEach(() => {
    const store = configureStore()
    wrapper = mount(<Provider store={store}><App /></Provider>)

    // i agree it should be way easier to change an input's value, but the airbnb guys don't
    // you should be able to test the highest level component (i.e. container components don't have props and they live at the highest point)
    // w/o hassle resorting to props or state IMO
    //
    // https://github.com/airbnb/enzyme/issues/76#issuecomment-189606849 is legit
    userTextInput = wrapper.find('form input[type="text"]')
    findForm = wrapper.find('form')
  })

  describe('when the user does not exist', () => {
    before(() => {
      nock('https://api.github.com')
        .get('/users/goeuro-2012/repos?sort=created')
        .reply(404)
    })

    it('should display a message saying "User not found."', (done) => {
      userTextInput.simulate('change', { target: { value: 'goeuro-2012' } });
      findForm.simulate('submit')

      const loading = wrapper.find('.request-status')

      assert.equal(loading.text(), 'Loading...')

      setTimeout(() => {
        assert.equal(loading.text(), 'User not found.')

        done()
      }, 100)
    })
  })

  describe('when an unexpected error occurs', () => {
    before(() => {
      nock('https://api.github.com')
        .get('/users/goeuro-2012/repos?sort=created')
        .reply(500)
    })

    it('should display a message saying "An unexpected error occurred."', (done) => {
      userTextInput.simulate('change', { target: { value: 'goeuro-2012' } });
      findForm.simulate('submit')

      const loading = wrapper.find('.request-status')

      assert.equal(loading.text(), 'Loading...')

      setTimeout(() => {
        assert.equal(loading.text(), 'An unexpected error occurred.')

        done()
      }, 100)
    })
  })

  describe('when the user exists and has public repositories', () => {
    before(() => {
      nock('https://api.github.com')
        .get('/users/goeuro-2012/repos?sort=created')
        .reply(200, goEuro)
    })

    it('should display a list of the user\'s repositories with a link to each repo', (done) => {
      userTextInput.simulate('change', { target: { value: 'goeuro-2012' } });
      findForm.simulate('submit')

      const loading = wrapper.find('.request-status')

      assert.equal(loading.text(), 'Loading...')

      setTimeout(() => {
        const hrefs = wrapper.find('.repositories .repository a')

        assert.equal(hrefs.length, 18)

        done()
      }, 100)
    })
  })

  describe('when the user exists and has no public repositories', () => {
    before(() => {
      nock('https://api.github.com')
        .get('/users/goeuro-2012/repos?sort=created')
        .reply(200, [])
    })

    it('should display a message saying "No public repositories exist for this user."', (done) => {
      userTextInput.simulate('change', { target: { value: 'goeuro-2012' } });
      findForm.simulate('submit')

      const loading = wrapper.find('.request-status')

      assert.equal(loading.text(), 'Loading...')

      setTimeout(() => {
        const noUsers = wrapper.find('.repositories .no-users')

        assert.equal(noUsers.text(), 'No public repositories exist for this user.')

        done()
      }, 100)
    })
  })

})
