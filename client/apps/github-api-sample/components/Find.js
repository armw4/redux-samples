import React, { Component } from 'react'

export default class extends Component {
  handleSubmit = e => {
    const { onFind } = this.props

    e.preventDefault()

    onFind()
  }

  handleChange = (_, value) => {
    const { onUserChange } = this.props

    onUserChange(value)
  }

  render() {
    const { user } = this.props

    // i think a ref to access the text input's value would be more ideal and lead to less churn,
    // but for the sake of UX (don't allow the user to search w/o entering something), we'll dispatch on change
    // and toggle the submit button accordingly
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Find" disabled={!user || !user.length} />
      </form>
    )
  }
}
