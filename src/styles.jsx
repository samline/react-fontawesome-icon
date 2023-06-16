/* Packages */
import styled from 'styled-components'
import {
  color,
  compose,
  layout,
  position,
  space,
  typography
} from 'styled-system'

/* Package Components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* ./ */
import { _interopDefault } from './_interop.js'

export const Icon = _interopDefault(styled)(FontAwesomeIcon)`
  height: 1em;
  ${compose(color, layout, position, space, typography)}
`
