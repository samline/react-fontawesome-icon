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

export const Icon = styled(FontAwesomeIcon)`
  height: 1em;
  ${compose(color, layout, position, space, typography)}
`
