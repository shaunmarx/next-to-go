import { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { compose, setDisplayName, componentFromProp, defaultProps } from 'recompose';
import enhancers from "../../enhancers";
import { space, width, fontSize, color } from 'styled-system'

var transformCapitilize = css`
  text-transform: caitalize;
`
var style = css`
  ${fontSize},
  ${color},
  ${space}
  ${ ({capitalize}) => capitalize ?  transformCapitilize : null };
`

var enhance = compose (
    setDisplayName("Typography"),
    enhancers.withStyle(style),
    defaultProps({ component: 'p'})
)

export default enhance(componentFromProp('component'));