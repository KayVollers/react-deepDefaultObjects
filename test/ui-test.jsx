import React from 'react';
import ReactDOM from 'react-dom';

import StatelessComp from './statelessComp.jsx';
import StatefulComp from './statefulComp.jsx';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changingProp: 'not changed yet',
            defaultMessage: undefined,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                changingProp: 'propChanged',
                defaultMessage: 'propChanged',
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <StatelessComp
                    originMessage={'unchanged'}
                    originNested={{
                        originMessage: 'unchanged',
                    }}
                    nestedMessages={{
                        nestMessage: 'unchanged',
                        originNestMessage: 'unchanged',
                        originNestArray: ['unchanged'],
                    }}
                    changingMessages={this.state.changingProp}
                    defaultMessage={this.state.defaultMessage}
                />
                <StatefulComp
                    originMessage={'unchanged'}
                    originNested={{
                        originMessage: 'unchanged',
                    }}
                    nestedMessages={{
                        nestMessage: 'unchanged',
                        originNestMessage: 'unchanged',
                        originNestArray: ['unchanged'],
                    }}
                    changingMessages={this.state.changingProp}
                    defaultMessage={this.state.defaultMessage}
                />
            </div>
        );
    }
};

ReactDOM.render(<Index />, document.getElementById('react'));