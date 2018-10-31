import React from 'react';
import StatelessComp from './statelessComp';
import StatefulComp from './statefulComp';
import renderer from 'react-test-renderer';

const props = {
    originMessage:'unchanged',
    originNested: {
        originMessage: 'unchanged',
    },
    nestedMessages: {
        nestMessage: 'unchanged',
        originNestMessage: 'unchanged',
        originNestArray: ['unchanged'],
    },
};

test('stateless react component', () => {
    const tree = renderer.create(
        <StatelessComp
            {...props}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('stateful react component', () => {
    const tree = renderer.create(
        <StatefulComp
            {...props}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});