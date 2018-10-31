# react-deepDefaultObjects

This higher order component (HOC) for react allows to consider nested objects as default properties.

## Why should I use that?

* <b>Improve code readability:</b> Allows to group logical related properties.
* <b>Max performance:</b> Only loop and merge nested objects as the rest is done by react itself anyway.
* <b>No side effects:</b> No 3rd party dependencies where used.

## How to use

1. install the dependency
```bash
    // with npm
    npm install react-deepdefaultobjects

    // with yarn
    yarn add react-deepdefaultobjects
```

2. import and use it where you need nested default objects
```js
import deepDefaultObjects from 'react-deepDefaultObjects';

class yourComponent extends React.Component {
    // your code
};

yourComponent.defaultProps = {
    nestedObject: {
        nestString: 'default',
        anotherNumber: 42,
    },
};

export default deepDefaultObjects(yourComponent);
```

## Debug

To debug this component you need to install node_modules first
```bash
    // with npm
    npm install

    // with yarn
    yarn add
```

For manual debugging run `npm start` or `yarn start`.

For automated tests run `npm run test` or yarn test`.
