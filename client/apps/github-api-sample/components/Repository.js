import React from 'react'

export default ({ details })=> {
  const { name } = details

  return (
    <div className="repository">
      <span>{name}</span>
    </div>
  )
}
