import React from 'react';
import ReactDOM from 'react-dom';

import StatelessComp from './statelessComp.jsx';
import StatefulComp from './statefulComp.jsx';

const Index = () => {
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
            />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById('react'));