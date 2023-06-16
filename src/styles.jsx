/* Packages */
import { _interop } from '@honeybee-js/js-interop'
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

export const Icon = _interop(styled)(FontAwesomeIcon)`
  height: 1em;
  ${compose(color, layout, position, space, typography)}
`
