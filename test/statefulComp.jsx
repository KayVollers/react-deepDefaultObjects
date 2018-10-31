import React from 'react';
import deepDefaultObjects from '../src/index.jsx';

class StatefulComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Stateful <p/> {JSON.stringify(this.props, null, '\t')}
            </div>
        );
    }
}

StatefulComp.defaultProps = {
    defaultMessage: 'default',
    originMessage: 'this is never shown',
    nestedMessages: {
        nestMessage: 'this is never shown',
        defaultNestMessage: 'default',
    },
};

export default deepDefaultObjects(StatefulComp);