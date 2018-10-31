import React from 'react';
import deepDefaultObjects from '../src/index.jsx';

const statelessComp = (props) => {
    return <div>Stateless <p/> {JSON.stringify(props, null, '\t')}</div>;
};

statelessComp.defaultProps = {
    defaultMessage: 'default',
    originMessage: 'this is never shown',
    nestedMessages: {
        nestMessage: 'this is never shown',
        defaultNestMessage: 'default',
    },
};

export default deepDefaultObjects(statelessComp);