import React from 'react'

export default ({ details })=> {
  const { fullName, htmlUrl } = details

  return (
    <div className="repository">
      <a target="_blank" href={htmlUrl}>{fullName}</a>
    </div>
  )
}
