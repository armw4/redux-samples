import React from 'react'
import Repository from './Repository'

export default ({ repositories }) => {
  const nodes = repositories.length ?
    repositories.map(repository => {
      const { id } = repository

      return <Repository key={id} details={repository} />
    }) :
    <span>No public repositories exist for this user.</span>

  return (
    <div className="repositories">
      {nodes}
    </div>
  )
}
