import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Alert from '../shared-components/Alert.jsx'

export default class Answer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.uli !== this.props.uli ||
      nextProps.isValidUli !== this.props.isValidUli
    )
  }

  render() {
    const { uli, isValidUli, checkDigit, isSubmitted, errors } = this.props
    if (isSubmitted && errors.length === 0) {
      if (uli && checkDigit)
        return (
          <Alert type="success" heading="Check digit generated!">
            <p>
              Your check digit is <strong>{checkDigit}</strong>.<br />
              Your ULI is <strong>{uli}</strong>.
            </p>
          </Alert>
        )

      if (isValidUli) {
        return (
          <Alert type="success" heading="Valid ULI!">
            <p>The ULI is valid.</p>
          </Alert>
        )
      } else {
        return (
          <Alert type="error" heading="Not a valid ULI!">
            <p>Sorry, that ULI does not appear to be valid.</p>
          </Alert>
        )
      }
    }

    return null
  }
}

Answer.propTypes = {
  uli: PropTypes.string,
  isValidUli: PropTypes.bool,
  checkDigit: PropTypes.number,
  isSubmitted: PropTypes.bool,
  errors: PropTypes.array
}
