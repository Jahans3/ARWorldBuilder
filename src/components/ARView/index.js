import React, { Component } from 'react'

import ARView from './ARView'

export default class ARViewContainer extends Component {
  _generateProps = () => ({
    ...this.props
  })

  render() {
    const props = this._generateProps()
    return (
      <ARView {...props} />
    )
  }
}
