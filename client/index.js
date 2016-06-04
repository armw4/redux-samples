import React from 'react'
import { render } from 'react-dom'
import './style.css'
import UPCA from './apps/upc-a'

const mountNode = document.getElementById('content')

render(<UPCA a="joshlyn-bae@poole.net" />, mountNode)
