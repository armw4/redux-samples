import React from 'react'
import Repository from './Repository'

export default ({ repositories }) => {
  const nodes = repositories.length ?
    repositories.map(repository => <Repository details={repository} />) :
    <span>No public repositories exist for this user.</span>

  return (
    <div className="repositories">
      {nodes}
    </div>
  )
}
