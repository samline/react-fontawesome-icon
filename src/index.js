/* Packages */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Libraries */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* Settings */
library.add(fab, far, fas)

/* Styles */
import { Icon } from './styles/index.js'

/**
 * FontAwesomeIcon
 * @param {string} icon (required) - icon to use. (e.g. 'chevron-right')
 * @param {string} lib - library to use. - (e.g. fas, far, fab) - default: fas
 * @param {reference} innerRef - you can still assign to ref
 * @param {...styledSystemProps} [color, layout, position, space, typography]
 * @param {...any} props
 *
 * @returns FontAwesomeIcon, library
 *
 * @fontawesome docs - https://fontawesome.com/search
 * @styleSystem docs - https://styled-system.com/table
 */

export const FontAwesomeIcon = ({ icon, lib = fas, innerRef, ...props }) => (
  <Icon
    icon={[lib, icon]}
    style={{ ...props.style, height: '1em' }}
    {...props}
    ref={innerRef}
  />
)

/**
 * library
 *
 * @returns library
 *
 * @fontawesome docs - https://fontawesome.com/v5/docs/web/use-with/react#using-icons-via-global-use
 */

export { library }
