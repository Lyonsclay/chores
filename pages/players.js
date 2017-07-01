import React from 'react'
import withData from '../lib/withData'
import graphPlayer, { handleSubmit } from '../components/addPlayer'
export default withData(graphPlayer(Players))
