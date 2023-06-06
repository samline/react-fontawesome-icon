# react-fontawesome-icon

An easy way to include FontAwesome (v6.4.0) icons in your React applications without having to add each icon separately.

![npm](https://img.shields.io/npm/v/@honeybee-js/react-fontawesome-icon?style=flat-square)
![npm](https://img.shields.io/npm/dt/react-fontawesome-icon?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@honeybee-js/react-fontawesome-icon?style=flat-square)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

## Install

```bash
npm i --save @honeybee-js/react-fontawesome-icon
```

```bash
yarn add @honeybee-js/react-fontawesome-icon
```

## Usage

```jsx
/**
 * FontAwesomeIcon
 * @param {string} icon (required) - icon to use. (e.g. 'chevron-right')
 * @param {string} lib - library to use. - (e.g. fas, far, fab) - default: fas
 * @param {reference} innerRef - you can still assign to ref
 * @param {...styledSystemProps} [color, layout, position, space, typography]
 * @param {...any} props
 *
 * @returns component
 *
 * @fontawesome docs - https://fontawesome.com/search
 * @styleSystem docs - https://styled-system.com/table
 */
```

```jsx
import { FontAwesomeIcon } from "@honeybee-js/react-fontawesome-icon"
```

```jsx
<FontAwesomeIcon icon="..." lib="..." ...styledSystemProps />
```

```jsx
/* Example */
<FontAwesomeIcon icon="facebook-f" lib="fab" color="#3b5998" fontSize="20px" />
```

## License

MIT © [Samline](https://github.com/samline)
