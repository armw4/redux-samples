import React from 'react'
import Repository from './Repository'

export default ({ repositories }) => repositories.map(repo => <Repository repo={repo})
